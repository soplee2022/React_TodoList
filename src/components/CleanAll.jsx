/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
export function CleanAll({
  data, setData,
}) {
  const total = data.filter((item) => !item.finish);

  return (
    <li className="flex items-center justify-between py-6 mx-6 ">
      <p className="text-sm text-brown">
        {total.length}
        {' '}
        個待完成項目
      </p>
      <input
        type="button"
        className="text-sm text-primary"
        value="清除已完成項目"
        onClick={() => { setData(total); }}
      />
    </li>
  );
}
