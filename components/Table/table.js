import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ headers, data, onEdit, onDelete, action }) => {
  return (
    <div className="-mx-4 mt-8 flow-root sm:mx-0">
      <table className="min-w-full">
        <colgroup>
          {headers.map((header) => (
            <col key={header.key} className={header.colClassName || ''} />
          ))}
          <col className="w-auto" />
        </colgroup>
        <TableHeader headers={headers} action={action} />
        <TableBody
          data={data}
          headers={headers}
          onEdit={onEdit}
          onDelete={onDelete}
          action={action}
        />
      </table>
    </div>
  );
};

export default Table;
