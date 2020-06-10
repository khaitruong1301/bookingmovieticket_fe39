import axios from 'axios'
import { domain, groupID } from '../settings/config';

export class quanLyPhimService {
    layDanhSachPhim = () => {
        return axios({
            url:`${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
            method:'GET'
        })
    }
    layThongTinPhim_LichChieu = (maPhim) => {
        return axios({
            url:`${domain}/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
            method:'GET'
        })
    }

    layThongTinPhongVe = (maLichChieu)=>{
        return axios({
            url:`${domain}/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`,
            method:'GET'
        })
    }

}


export const qlPhimService = new quanLyPhimService();