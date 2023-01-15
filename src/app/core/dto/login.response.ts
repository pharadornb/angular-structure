import { BaseResponse } from "./base.response";

export class LoginReponse extends BaseResponse {
    public token: string;
    public refreshToken: string;
}

