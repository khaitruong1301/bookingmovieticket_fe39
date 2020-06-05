import axios from 'axios'
import { domain, groupID } from '../settings/config';

export class quanLyPhimService {
    layDanhSachPhim = () => {
        return axios({
            url:`${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
            method:'GET'
        })
    }
}


export const qlPhimService = new quanLyPhimService();