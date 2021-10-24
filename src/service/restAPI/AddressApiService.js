import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class AddressApiService {
  getAddresses() {
    return axios.get("/addresses", {
      headers: authHeader(),
    })
  }
  updateAddress(id, address) {
    return axios.put(
      "/addresses/update/" + id,
      {
        firstName: address.firstName,
        lastName: address.lastName,
        phoneNumber: address.phoneNumber,
        region: address.region,
        city: address.city,
        province: address.province,
        barangay: address.barangay,
        street: address.street,
        postalCode: address.postalCode,
      },
      {
        headers: authHeader(),
      },
    )
  }
  saveAddress(address) {
    return axios.post(
      "/addresses/save",
      {
        firstName: address.firstName,
        lastName: address.lastName,
        phoneNumber: address.phoneNumber,
        region: address.region,
        city: address.city,
        province: address.province,
        barangay: address.barangay,
        street: address.street,
        postalCode: address.postalCode,
      },
      {
        headers: authHeader(),
      },
    )
  }
  deleteAddress(id) {
    return axios.delete("/addresses/delete/" + id, {
      headers: authHeader(),
    })
  }
}

export default new AddressApiService()
