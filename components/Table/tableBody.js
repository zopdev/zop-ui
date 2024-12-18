import React from 'react';

const TableBody = ({ data, headers, onEdit, onDelete, action = true }) => {
  return (
    <tbody>
      {data?.map((row, rowIndex) => (
        <tr key={row.id || rowIndex} className="border-b border-gray-200">
          {headers.map((header) => (
            <td
              key={header.key}
              className={`px-3 py-5 text-sm ${
                header.align === 'right' ? 'text-right' : 'text-left'
              } text-gray-500`}
            >
              {/* Allow React components or plain text */}
              {typeof row[header.key] === 'function' ? row[header.key]() : row[header.key]}
            </td>
          ))}
          {action && (
            <td className="px-3 py-5 text-right">
              <div className="flex gap-2 justify-end">
                {onEdit && (
                  <button onClick={() => onEdit(row)} className="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>
                )}
                <button onClick={() => onDelete(row)} className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </div>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
