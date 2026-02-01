import { RegisterUser, RegisterUserResponse } from "@/lib/types";
import api from "./api";

export const registerUser = async (user: RegisterUser): Promise<RegisterUserResponse> => {
    const response = await api.post("/auth/register", user);
    return response.data;
}

