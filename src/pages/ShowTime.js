import React,{useEffect,useState} from 'react'
import { qlPhimService } from '../services/quanLyPhimService';

export default function ShowTime(props) {

    let [lichChieuPhim,setLichChieuPhim] = useState({})
    useEffect(()=>{
        //Lấy maLichChieu từ params
        let {maLichChieu} = props.match.params;
        qlPhimService.layThongTinPhongVe(maLichChieu).then((res=>{
            console.log(res.data)
        })).catch(errors=>{
            console.log(errors.response.data)
        })
    },[])

    renderThongTinPhim = () => {

    } 

    renderDanhSachGhe = () => {}
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-6">
                <div class="trapezoid ">Màn hình</div>
                    {/* Danh sách ghế */}
                    {renderDanhSachGhe()}
                </div>
                <div className="col-6">
                    {/*Thông tin phim */}
                    {renderThongTinPhim()}
                </div>
            </div>
        </div>
    )
}
