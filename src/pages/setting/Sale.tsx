import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { countAtom } from '@/store/counter';
import { BaseService } from '@/service';
import BasicTable from '@/components/table/BasicTable';
import { createColumnHelper } from '@tanstack/react-table';

type Albumn = {
  id: string;
  thumbnailUrl: string;
  title: number;
  url: number;
};
const columnHelper = createColumnHelper<Albumn>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor(row => row.thumbnailUrl, {
  //   id: 'thumbnailUrl',
  //   cell: info => <i>{info.getValue()}</i>,
  //   header: () => <span>Last Name</span>,
  //   footer: info => info.column.id,
  // }),
  columnHelper.accessor('thumbnailUrl', {
    header: () => <div className="flex text-center justify-center">thumbnailUrl</div>,
    //   cell: info => info.renderValue(),
    cell: (info) => (
      <div className="flex text-center justify-center">
        <img className="rounded-full" src={info.getValue()} width="40" height="40" />
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('title', {
    header: () => <span>title</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('url', {
    header: 'Url',
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor('progress', {
  //   header: 'Profile Progress',
  //   footer: info => info.column.id,
  // }),
];
function Sale() {
  const [count] = useAtom(countAtom);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getJsonData = async () => {
    const service = new BaseService('https://jsonplaceholder.typicode.com/');
    const response = await service.getJSON('photos');
    setData(response.data.slice(0, 100));
    setLoading(false);
  };

  useEffect(() => {
    getJsonData();
  }, []);
  return (
    <div>
      <p className="font-bold text-[24px]">Sale</p>
      <p>Count: {count}</p>
      {loading ? <p>loading...</p> : <BasicTable data={data} columns={columns} />}
    </div>
  );
}

export default Sale;
