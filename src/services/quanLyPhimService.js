import axios from 'axios'
import { domain, groupID } from '../settings/config';

export class quanLyPhimService {
    layDanhSachPhim = () => {
        
    }
    layThongTinPhim_LichChieu = (maPhim) => {
        return axios({
            url:`${domain}/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
            method:'GET'
        })
    }
}


export const qlPhimService = new quanLyPhimService();