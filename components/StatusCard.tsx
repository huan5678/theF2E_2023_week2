'use client';

import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import ArrowRight from './icons/ArrowRight';
import NumberCircle from './NumberCircle';
import {useWindowSize} from '@/lib/utils.ts';
import {useState} from 'react';

type StatusCardProps = {
  voteData: {
    colors: string[];
    datasets: {
      name: string;
      value: number;
    }[];
    valid: number;
    invalid: number;
    totalEligibleVotes: number;
  };
  partyData: {
    labels: string[];
    colors: string[];
    datasets: {
      name: string;
      value: number;
      number: number;
    }[];
  };
};

const StatusCard = ({voteData, partyData}: StatusCardProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const {width} = useWindowSize();
  const isMobile = width < 768;

  return (
    <div
      className={`flex flex-col w-full  px-5 py-3 bg-white rounded-lg md:py-5 ${
        showDetail && 'gap-5'
      }`}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShowDetail(!showDetail)}
      >
        <p className="">投票概況</p>
        <ArrowRight
          className={`${
            showDetail ? 'rotate-90' : 'rotate-0'
          } block md:hidden origin-center transition duration-300`}
        />
      </div>
      <section
        className={`${
          !showDetail
            ? 'scale-y-0 overflow-hidden max-h-0 opacity-0'
            : 'scale-y-100 opacity-100 max-h-[17rem]'
        } transition-[transform_opacity_max-height] duration-500 space-y-5 origin-top`}
      >
        <div className="flex gap-3">
          <div className="flex gap-3">
            <ResponsiveContainer
              minWidth={72}
              minHeight={72}
              width={isMobile ? 72 : 120}
              height="100%"
            >
              <PieChart>
                <Pie data={voteData.datasets} dataKey={'value'} innerRadius={10} outerRadius={30}>
                  {voteData.datasets.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={voteData.colors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="grid place-content-center">
              <span className="block font-bold">
                {(
                  (voteData.valid / voteData.datasets.reduce((a, b) => a + b.value, 0)) *
                  100
                ).toFixed(2)}{' '}
                %
              </span>
              <span className="text-xs leading-[1.2] font-bold">投票率</span>
            </div>
          </div>
          <div className="space-y-2 text-xs leading-[1.2]">
            <div className="flex gap-2">
              <p>投票數</p>
              <p className="font-bold">{voteData.datasets.reduce((a, b) => a + b.value, 0)} 票</p>
            </div>
            {voteData.datasets.map((data, index) => (
              <div className="flex gap-2" key={index}>
                <p>{data.name}</p>
                <p>{data.value} 票</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ResponsiveContainer
            minWidth={72}
            minHeight={72}
            width={isMobile ? 72 : 120}
            height="100%"
          >
            <PieChart>
              <Pie data={partyData.datasets} dataKey={'value'} innerRadius={10} outerRadius={30}>
                {partyData.datasets.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={partyData.colors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col w-full gap-2">
            {partyData.datasets.map((data, index) => (
              <div key={data.name} className="flex items-center justify-between">
                <div className="flex gap-2">
                  <NumberCircle
                    number={data.number}
                    className={
                      data.number === 3 ? 'bg-green' : data.number === 2 ? 'bg-blue' : 'bg-brown'
                    }
                  />
                  <div className="text-xs">
                    <p className="font-semibold leading-[1.4]">{partyData.labels[index]}</p>
                    <p className="leading-[1.2]">{data.name}</p>
                  </div>
                </div>
                <div
                  className={`pl-5 w-2/5 text-sm border-0 border-l-2 ${
                    data.number === 3
                      ? 'border-green'
                      : data.number === 2
                      ? 'border-blue'
                      : 'border-brown'
                  }`}
                >
                  <p className="font-semibold leading-[1.4]">
                    {((data.value / voteData.totalEligibleVotes) * 100).toFixed(2)} %
                  </p>
                  <p className="leading-[1.2]">{data.value} 票</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusCard;
