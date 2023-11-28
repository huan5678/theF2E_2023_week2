import Image from 'next/image';

import StatusCard from '@/components/StatusCard';
import TipCard from '@/components/TipCard';
import CountySelect from '@/components/CountySelect';
import TaiwanMap from '@/components/icons/TaiwanMap';

const voteData = {
  colors: ['rgba(204, 204, 204, 1)', 'rgba(38, 46, 73, 1)'],
  datasets: [
    {
      name: '無效票數',
      value: 5010165,
    },
    {
      name: '有效票數',
      value: 14464571,
    },
  ],
  valid: 14300940,
  invalid: 163631,
  totalVotes: 19311105,
  totalEligibleVotes: 14464571,
};

const partyData = {
  colors: ['#84CB98', '#8894D8', '#DFA175'],
  labels: ['民主進步黨', '中國國民黨', '親民黨'],
  datasets: [
    {
      name: '蔡英文 | 賴清德',
      value: 8170231,
      number: 3,
    },
    {
      name: '韓國瑜｜張善政',
      value: 5522119,
      number: 2,
    },
    {
      name: '宋楚瑜｜余湘',
      value: 608590,
      number: 1,
    },
  ],
};

const data = {
  宜蘭龜山島: 'text-green',
  臺東縣綠島: 'text-green',
  臺東縣蘭嶼: 'text-blue',
  宜蘭縣: 'text-blue',
  花蓮縣: 'text-blue',
  臺東縣: 'text-blue',
  新北市: 'text-green',
  臺北市: 'text-green',
  桃園市: 'text-green',
  新竹縣: 'text-blue',
  新竹市: 'text-green',
  連江縣馬祖: 'text-blue',
  金門縣: 'text-blue',
  澎湖縣: 'text-green',
  屏東縣琉球: 'text-green',
  苗栗縣: 'text-green',
  南投縣: 'text-green',
  臺中市: 'text-green',
  屏東縣: 'text-green',
  雲林縣: 'text-green',
  嘉義縣: 'text-green',
  臺南市: 'text-green',
  高雄市: 'text-green',
  嘉義市: 'text-green',
  彰化縣: 'text-green',
  基隆市: 'text-green',
};

const voteList = [{}];

const tipList = [
  {
    title: '點擊選擇縣市、區、村里，可查看選舉結果',
    image: '/images/tip_01.svg',
  },
  {
    title: '點擊地圖查看縣市的選舉結果',
    image: '/images/tip_02.svg',
  },
];

export default function Home() {
  return (
    <main className="container min-h-screen py-8">
      <div className="flex flex-col items-center justify-center gap-5">
        <CountySelect />
        <StatusCard voteData={voteData} partyData={partyData} />
        <TaiwanMap data={data} />
        <div className="overflow-hidden">
          <div className="flex gap-5 overflow-y-auto">
            <div className="w-2/3 shrink-0">
              <TipCard
                content="點擊選擇縣市、區、村里，可查看選舉結果"
                image="/images/tip_01.svg"
                imageSize={{
                  width: 156,
                  height: 46,
                }}
              />
            </div>
            <div className="w-2/3 shrink-0">
              <TipCard
                content="點擊地圖查看縣市的選舉結果"
                image="/images/tip_02.svg"
                imageSize={{
                  width: 111,
                  height: 48,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
