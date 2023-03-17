import { API_URL } from "../../settings.js"
import { fetchGetJson } from "../../utils.js"
const URL = API_URL + "cars"

export async function initCars() {
  const tbody = document.getElementById("table-rows");
  const cars = await fetchGetJson(URL);
  const rows = cars.map(car => `
    <tr>
      <td>${car.id}</td>
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.pricePrDay}</td>
      <td>${car.bestDiscount}</td>
    </tr>
  `);
  tbody.innerHTML = rows.join("");
}