export default function (req, res, next) {
  const response = {
    message: res.message || 'Success',
    data: res.data
  };
  // if (res.data.pagination) {
  //   response.pagination = res.data.pagination;
  //   response.data = res.data.data;
  // }
  // if (res.data.recordsTotal) {
  //   response.draw = res.data.draw;
  //   response.recordsFiltered = res.data.recordsFiltered;
  //   response.recordsTotal = res.data.recordsTotal;
  //   response.data = res.data.data;
  // }
  return res.json(response).end();
}
