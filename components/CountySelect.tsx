'use client';

import {Button} from '@/components/ui/button';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import villageList from '@/data/village_list_formatted.json';
import {useEffect, useState} from 'react';
import Reload from './icons/Reload';

const CountySelect = () => {
  const [result, setResult] = useState<{
    countySelect: string;
    townSelect: string;
    villageSelect: string;
    townList: {
      town_id: number;
      town: string;
      villages: {village: string; village_id: number | null}[];
    }[][];
    villageList: {village: string; village_id: number | null}[][];
  }>({
    countySelect: '',
    townSelect: '',
    villageSelect: '',
    townList: [],
    villageList: [],
  });

  useEffect(() => {
    setResult({
      ...result,
      townList: villageList
        .filter((county) => county.county_id === parseInt(result.countySelect))
        .map((village) => village.towns),
      villageList: villageList
        .filter((county) => county.county_id === parseInt(result.countySelect))
        .flatMap((village) => village.towns)
        .filter((town) => town.town_id === parseInt(result.townSelect))
        .map((town) => town.villages),
    });
  }, [result.countySelect, result.townSelect, result.villageSelect]);

  return (
    <div className="flex w-full gap-2">
      <div className="flex flex-col flex-auto gap-3">
        <Select
          onValueChange={(value) =>
            setResult({
              ...result,
              countySelect: value,
            })
          }
        >
          <SelectTrigger className="">
            <SelectValue placeholder="請選擇" />
          </SelectTrigger>
          <SelectContent>
            {villageList
              .sort((prev, curr) => curr.county_id - prev.county_id)
              .map((village) => (
                <SelectItem key={village.county_id} value={village.county_id.toString()}>
                  {village.county}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Select
            disabled={result.countySelect === ''}
            onValueChange={(value) =>
              setResult({
                ...result,
                townSelect: value,
              })
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              {result.townList.map((town) =>
                town.map((town) => (
                  <SelectItem key={town.town_id} value={town.town_id.toString()}>
                    {town.town}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          <Select
            disabled={result.townSelect === ''}
            onValueChange={(value) =>
              setResult({
                ...result,
                villageSelect: value,
              })
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              {result.villageList.map((village) =>
                village.map(
                  (village) =>
                    village.village_id && (
                      <SelectItem key={village.village_id} value={village.village_id.toString()}>
                        {village.village}
                      </SelectItem>
                    )
                )
              )}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="h-auto px-2 bg-primary-dark active:bg-primary-dark-hover hover:bg-blue-dark-hover">
        <Reload />
      </Button>
    </div>
  );
};

export default CountySelect;
