import { API_URL } from "../../settings.js"
import { fetchGetJson } from "../../utils.js"
const URL = API_URL + "/members"

export async function initMembers(){
    const tbody = document.getElementById("table-rows");
    const members = await fetchGetJson(URL);
    const rows = members.map(member => `
      <tr>
        <td>${member.username}</td>
        <td>${member.email}</td>
        <td>${member.firstName} + " " + ${member.lastName}</td>
        <td>${member.ranking}</td>
      </tr>
    `);
    tbody.innerHTML = rows.join("");

}