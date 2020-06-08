import React, { useState, useEffect, Fragment } from 'react'
import { qlPhimService } from '../services/quanLyPhimService';

export default function MovieDetail(props) {


    let [thongTinPhim, setThongTinPhim] = useState({});



    //Gọi service lấy dữ liệu hiển thị component tại lifecycle componentdidmount
    useEffect(() => {
        qlPhimService.layThongTinPhim_LichChieu(props.match.params.maPhim).then((res) => {
            console.log(res.data);
            setThongTinPhim(res.data)
        }).catch(errors => {
            console.log(errors.response.data);
        })
    }, [])

    console.log('thongTinPhim', thongTinPhim);

    return (
        <div className="container">
            <div className="row">

                <div className="col-6 mt-5">
                    <img style={{ width: 200, height: 350 }} />
                </div>
                <div className="col-6 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>Lâu đài đẫm máu</th>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <th>mô tả ....</th>
                            </tr>
                        </thead>

                    </table>
                </div>

            </div>
            <hr />
            <h3>Thông tin lịch chiếu</h3>
            <div className="container">
                <div className="row">
                    <div className="nav flex-column nav-pills col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
                            return <a key={index} 
                                      className="nav-link" 
                                      id="v-pills-home-tab" 
                                      data-toggle="pill" 
                                      href={`#${heThongRap.maHeThongRap}`} 
                                      role="tab" 
                                      aria-controls="v-pills-home" 
                                      aria-selected="true">
                                <img className="mr-1" 
                                src={heThongRap.logo} 
                                style={{ width: 35, height: 35 }} />
                                <span> {heThongRap.tenHeThongRap}</span>
                            </a>

                        })}

                        {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                    </div>
                    <div className="tab-content col-8" id="v-pills-tabContent">
                    {thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
                            return <div 
                            className="tab-pane fade show" 
                            id={heThongRap.maHeThongRap} 
                            role="tabpanel" 
                            aria-labelledby="v-pills-home-tab">
                                {heThongRap.tenHeThongRap}
                            </div>

                        })}
                        {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Profile</div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Messages</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Settings</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
