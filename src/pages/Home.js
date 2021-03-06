import React,{useEffect,useState} from 'react'
import { qlPhimService } from '../services/quanLyPhimService';

export default function Home(props) {
    let [danhSachPhim,setDanhSachPhim] = useState([]);
    //Ứng với componendidmount
    useEffect(()=>{
        //Gọi service api set lại state danhSachPhim
        qlPhimService.layDanhSachPhim().then(res => {
            console.log(res.data);
            setDanhSachPhim(res.data);
        }).catch(error=>{
            console.log(error.response.data);
        })
    },[])
    const renderPhim = ()=>{
        return danhSachPhim.map((phim,index)=>{
            return <div className="col-4" key={index}>
                <div className="card text-left mt-5">
                    <img className="card-img-top" src={phim.hinhAnh} style={{width:'100%',height:450}} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>

            </div>
        })
    }
    return (
        <div className="container">
            <h3 className="display-4 text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}

            </div>
        </div>
    )
}
