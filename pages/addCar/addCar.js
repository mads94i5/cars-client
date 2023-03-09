
import { API_URL,FETCH_NO_API_ERROR } from "../../settings.js"
import { fetchPostJsonFormData } from "../../utils.js"
//Add id to this URL to get a single user
const URL = `${API_URL}/cars`

export async function initAddCar() {
    document.getElementById("btn-submit-car").onclick = submitCar
  }

  async function submitCar(event) {
    event.preventDefault();
    console.log("Trying to submit car")
    const formAddCar = document.getElementById("form")
    const addedData = await fetchPostJsonFormData(URL, formAddCar, event)
    
    const statusElement = document.getElementById("status");
    statusElement.innerText = "Car added!";
    clearForm()
  }

  function clearForm(event){
    event.preventDefault()
    document.getElementById("brand").value=""
    document.getElementById("model").value=""
    document.getElementById("price-pr-day").value=""
    document.getElementById("best-discount").value=""
  }
