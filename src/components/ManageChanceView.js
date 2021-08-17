
import React, { Component } from 'react'
import { CheckPicker, SelectPicker, Pagination } from 'rsuite'

import './ManageChanceView.css'
export class ManageChanceView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceData: [
                { label: 'Nâng ngực', value: 1 },
                { label: 'Tắm trắng', value: 2 },
                { label: 'Triệt lông', value: 3 },
                { label: 'Triệt lông mũi', value: 4 },
                { label: 'Triệt lông nách', value: 5 },
                { label: 'Nâng mí', value: 6 }
            ],
            sexData: [
                { label: 'Nam', value: 1 },
                { label: 'Nữ', value: 2 },
                { label: 'Giới tính thứ 3', value: 3 },
            ],
            visitorData: [
                { label: 'Facebook', value: 1 },
                { label: 'Zalo', value: 2 },
                { label: 'Website', value: 3 },
                { label: 'Trực tiếp đến cửa hàng', value: 4 },
                { label: 'Đến từ các nguồn khác', value: 5 }
            ]
        }
    }

    render() {
        return (
            <div className='main-view'>
                <div className='create-chance-form'>
                    <p>Tạo cơ hội mới</p>
                    <div className='wrapper'>
                        <div className='text-form'>
                            <label>Số điện thoại</label>
                            <input type='text' className='input-field' onChange={this.getUsername}></input>
                        </div>

                    </div>
                    <div className='wrapper'>
                        <div className='name-sex'>
                            <div className='wrapper-1'>
                                <div className='text-form name'>
                                    <label>Tên khách hàng</label>
                                    <input type='text' className='input-field' onChange={this.getUsername}></input>
                                </div>
                            </div>
                            <div>
                                <div className='text-form picker'>
                                    <div><label>Giới tính</label></div>
                                    <SelectPicker data={this.state.sexData} style={{width:141}} searchable={false} placeholder='Chọn giới tính' appearance='subtle' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='text-form'>
                            <label>Địa chỉ</label>
                            <input type='text' className='input-field' onChange={this.getUsername}></input>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='text-form picker service'>
                            <CheckPicker data={this.state.serviceData} style={{}} appearance='subtle' searchable={false} placeholder='Lựa chọn dịch vụ' />
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='text-form picker'>
                            <label>Nguồn khách đến</label>
                            <SelectPicker data={this.state.visitorData} searchable={false} placeholder='Lựa chọn nguồn khách đến' appearance='subtle' />
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='text-form note'>
                            <label>Ghi chú</label>
                            <textarea rows='7' cols='60'></textarea>
                        </div>
                    </div>
                    <div className='wrapper button'>
                        <div>
                            <button>Tạo cơ hội</button>
                        </div>
                    </div>
                </div>

                <div className='created-chance-form'>
                    <div class='created-title'>
                        <p>Cơ hội đã tạo</p>
                        <div className='search-box'>
                            <div className='search-icon'>
                                <svg width='14px' height='14px' class="css-178dftq ub-z-idx_3 ub-w_14px ub-h_14px ub-box-szg_border-box" data-icon="search" viewBox="0 0 16 16">
                                    <path d="M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 
                                    3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill-rule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <input type='text' placeholder='Tìm kiếm'></input>
                        </div>
                    </div>
                    <div className='group-titles'>
                        <div className='chance-title name-1'>
                            <p>Tên khách hàng</p>
                        </div>
                        <div className='chance-title phoneNum-2'>
                            <p>Số điện thoại</p>
                        </div>
                        <div className='chance-title service-3'>
                            <p>Dịch vụ quan tâm</p>
                        </div>
                        <div className='chance-title creater-4'>
                            <p>Người tạo</p>
                        </div>
                        <div className='chance-title createTime-5'>
                            <p>Thời gian tạo</p>
                        </div>
                        <div className='chance-title action-6'>
                            <p>Action</p>
                        </div>
                    </div>
                    <div className='created-chance'>
                        <div className='created-item name-1'>
                            <p>Phạm Phi Long</p>
                        </div>
                        <div className='created-item phoneNum-2'>
                            <p>0368980597</p>
                        </div>
                        <div className='created-item service-3'>
                            <p>Nâng ngực</p>
                        </div>
                        <div className='created-item creater-4'>
                            <p>longpp97</p>
                        </div>
                        <div className='created-item createTime-5'>
                            <p>11:14:50 13/08/2021</p>
                        </div>
                        <div className='created-item action-6'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='created-chance'>
                        <div className='created-item name-1'>
                            <p>Phạm Phi Long 2</p>
                        </div>
                        <div className='created-item phoneNum-2'>
                            <p>0368980597</p>
                        </div>
                        <div className='created-item service-3'>
                            <p>Nâng ngực, Nâng mí</p>
                        </div>
                        <div className='created-item creater-4'>
                            <p>longpp1997</p>
                        </div>
                        <div className='created-item createTime-5'>
                            <p>12:14:50 13/08/2021</p>
                        </div>
                        <div className='created-item action-6'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='created-chance'>
                        <div className='created-item name-1'>
                            <p>Phạm Phi Long 3</p>
                        </div>
                        <div className='created-item phoneNum-2'>
                            <p>0368980597</p>
                        </div>
                        <div className='created-item service-3'>
                            <p>Triệt lông, Triệt lông mũi</p>
                        </div>
                        <div className='created-item creater-4'>
                            <p>longpp979797</p>
                        </div>
                        <div className='created-item createTime-5'>
                            <p>08:14:55 15/08/2021</p>
                        </div>
                        <div className='created-item action-6'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='pagination'>
                        <Pagination
                            prev={true}
                            next={true}
                            ellipsis={true}
                            boundaryLinks={true}
                            activePage={1}
                            pages={1}
                            maxButtons={5}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageChanceView
