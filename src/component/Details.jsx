import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _get from 'lodash/get';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { fetchDetail } from '../Redux/Covid/covidSlice';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Details() {

  const params = new URLSearchParams(window.location.search)
  let { covid } = useSelector((state) => state.covid);
  console.log(covid)

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchDetail(params.get('name')));
  }, []);

  const data = {
    labels: ['Active', 'Death', 'new', 'critical'],
    datasets: [
      {
        label: 'Covid',
        data: [_get(covid[0], 'cases.active', ''), _get(covid[0], 'deaths.total', '') , _get(covid[0], 'cases.new', ''),_get(covid[0], 'cases.critical', '')],
        backgroundColor: [
          'rgba(37 ,99, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(25, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(37 ,99 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 1)',
          'rgba(25, 206, 86, 0.2)',

        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
      <div className='w-full flex justify-center my-5 '><h1 className='font-bold text-3xl'>Covid 19 report in : {_get(covid[0], 'country', '')}</h1></div>
      <div className='flex justify-between mx-[400px]'>
        <div className=' mt-5'>
          <div className='text-center rounded-t-md font-extrabold bg-green-600 text-white'>Total infected</div>
          <div className='shadow-xl w-[200px] px-6 py-4 bg-white rounded-md '>
            <ul>
              <li className='font font-bold text-xl' >{_get(covid[0], 'cases.total', '').toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</li>
              <li className='opacity-80 text-sm'>{_get(covid[0], 'day', '')}</li>
              <li className='opacity-80 text-sm font-bold'>Number of active cases of covid</li>
            </ul>
          </div>

        </div>

        <div className=' mt-5'>
          <div className='text-center rounded-t-md font-extrabold bg-red-600 text-white'>Total Death</div>
          <div className='shadow-xl w-[200px] px-6 py-4 bg-white rounded-md '>
            <ul>
              <li className='font font-bold text-xl'>{_get(covid[0], 'deaths.total', '').toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</li>
              <li className='opacity-80 text-sm'>{_get(covid[0], 'day', '')}</li>
              <li className='opacity-80 text-sm font-bold'>Number of active cases of covid</li>
            </ul>
          </div>

        </div>

        <div className=' mt-5'>
          <div className='text-center rounded-t-md font-extrabold bg-blue-600 text-white'>Total recovery</div>
          <div className='shadow-xl w-[200px] px-6 py-4 bg-white rounded-md '>
            <ul className=''>
              <li className='font font-bold text-xl' >{_get(covid[0], 'cases.recovered', '').toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</li>
              <li className='opacity-80 text-sm'>{_get(covid[0], 'day', '')}</li>
              <li className='opacity-80 text-sm font-bold'>Number of active cases of covid</li>
            </ul>
          </div>

        </div>

      </div>
      <div className='flex justify-around'>
        <div className='w-[450px] h-[300px] mt-[50px]'><Pie data={data} /></div>
      </div>

    </>
  );
}


