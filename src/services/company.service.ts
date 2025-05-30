import axios from "axios";
import { ICompanyDTO } from "../dto/company.dto";

const apiUrl = process.env.REACT_APP_API_URL;

const getCompanyById = async (id: string) => {
  try {
    const response = await axios.get<ICompanyDTO[]>(`${apiUrl}/companies`, {
      params: { id },
    });
    return response.data[0];
  } catch (error) {
    console.error("An error occured during the request:", error);
    return null;
  }
};

const companyService = {
  getCompanyById,
};

export default companyService;
