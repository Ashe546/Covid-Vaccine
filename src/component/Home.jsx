import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Covid/covidSlice';

export default function Home() {
  let { covid } = useSelector((state) => state.covid);
  let { status } = useSelector((state) => state.covid);
  const [render, setRender] = useState(covid)


  const dispatch = useDispatch();
  React.useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handelFilter = () => {
        let arrto = []
        render.length === 0 ? arrto = [...covid] : arrto = [...render]

        arrto.sort((a, b) => {
            let fa = a.country,
                fb = b.country;

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;

        });
        setRender(arrto)
    }

    const handelCountry = (value) => {
        let arrto = [...covid]
        let x = arrto.filter((w) => w.continent === value || w.continent === "")
        setRender(x)
    }

    const handelPopulation = () => {
        let arrto = []
        render.length === 0 ? arrto = [...covid] : arrto = [...render]
        arrto.sort((a, b) => {
            let fa = a.population,
                fb = b.population;

            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;

        });
        setRender(arrto)
    }

    const handelDate = (e) => {
        console.log(e.target.value)
    }

    let covids = []
    render.length === 0 ? covids = covid : covids = render


    return (
        <>

            {status === 'pending' ? <div className='grid h-screen place-items-center'><img src="Color Fill Loading Image Gif.gif" className='w-[500px] h-[400px]' alt="loading" /></div> : <div className='flex gap-[100px] px-[100px] py-[30px]'>

                <div className=' mt-5'>
                    <div className='text-center rounded-t-md font-extrabold bg-black text-white'>Filter by Continent</div>
                    <div className='shadow-xl w-[250px] p-4 bg-white rounded-md '>
                        <ul>
                            <li><button className='hover:px-2' value="Africa" onClick={(e) => handelCountry(e.target.value)}>Africa</button></li>
                            <li><button className='hover:px-2'  value="North-America" onClick={(e) => handelCountry(e.target.value)}>North-America</button></li>
                            <li><button className='hover:px-2'  value="Asia" onClick={(e) => handelCountry(e.target.value)}>Asia</button> </li>
                            <li><button className='hover:px-2'  value="Oceania" onClick={(e) => handelCountry(e.target.value)}>Oceania</button></li>
                            <li><button className='hover:px-2'  value="Europe" onClick={(e) => handelCountry(e.target.value)}>Europe</button></li>
                            <li><button className='hover:px-2'  value="South-America" onClick={(e) => handelCountry(e.target.value)}>South-America</button></li>
                        </ul>
                    </div>

                </div>


                <table className="table-auto mt-5 shadow-2xl bg-white">
                    <thead>
                        <tr className='bg-black text-white'>
                            <th className='bold'><div className='flex'>No.</div></th>
                            <th className='bold'> <div className='flex'><img src='/icons8-descending-sorting-50.png' height="15px" width="25px"></img> Continent </div></th>
                            <th className='bold'><div className='flex' onClick={() => handelFilter()} ><img src='/icons8-descending-sorting-50.png' height="15px" width="25px"></img> Country </div></th>
                            <th className='bold pl-[10px]'><div className='flex' onClick={() => handelPopulation()} ><img src='/icons8-descending-sorting-50.png' height="15px" width="25px"></img> Population </div></th>
                            <th className='bold pl-[10px]'><div className='flex' onClick={() => handelPopulation()} ><img src='/icons8-descending-sorting-50.png' height="15px" width="25px"></img> Total Case </div></th>
                            <th className='bold pl-[10px]'><div className='flex' onClick={() => handelCountry()} ><img src='/icons8-descending-sorting-50.png' height="15px" width="25px"></img> Total Death </div></th>

                        </tr>
                    </thead>
                    <tbody className='mt-2'>
                        {covids.map((c, i) => (
                            <tr key={i}>
                                <td className='border-solid border-2 border-black p-1 w-[50px]'> {i}</td>
                                <td className='border-solid border-2 border-black p-1 w-[150px]'>{c.continent}</td>
                                <td className='border-solid border-2 border-black p-1 w-fit'><a className='active' href={`/details?name=${c.country}`}>{c.country}</a></td>
                                <td className='border-solid border-2 border-black p-1 w-[150px]'>{c.population != null ? c.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : ''}</td>
                                <td className='border-solid border-2 border-black p-1 w-[150px]'>{c.cases.total != null ? c.cases.total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : ''}</td>
                                <td className='border-solid border-2 border-black p-1 w-[150px]'>{c.deaths.total != null ? c.deaths.total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </>
    );
}
