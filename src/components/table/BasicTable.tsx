/* eslint-disable @typescript-eslint/no-explicit-any*/
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

type BasicTableProps<T> = {
  data: T[];
  columns: any[];
};

const BasicTable = <T,>({ data, columns }: BasicTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Photo</h2>
        </header>
        <div className="p-3">
          <div className="w-full overflow-x-auto h-[calc(100vh-300px)]">
            <table className="table-auto w-full overflow-y-auto">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 sticky top-0 z-10 w-full">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="odd:bg-white even:bg-gray-100">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-2 whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTable;
