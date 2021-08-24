import { React, Component } from 'react'
import AppContext from '../../context';
import { Pane, Button } from 'evergreen-ui';
import { CheckPicker, SelectPicker, Pagination } from 'rsuite';
import TextForm from '../../components/TextForm';
import 'rsuite/dist/styles/rsuite-default.css';
import SearchBox from '../../components/SearchBox';

export class LeadIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceData: [
                { 'label': 'Nâng ngực', 'value': 'Nâng ngực' },
                { 'label': 'Tắm trắng', 'value': 'Tắm trắng' },
                { 'label': 'Triệt lông', 'value': 'Triệt lông' },
                { 'label': 'Triệt lông mũi', 'value': 'Triệt lông mũi' },
                { 'label': 'Triệt lông nách', 'value': 'Triệt lông nách' },
                { 'label': 'Nâng mí', 'value': 'Nâng mí' }
            ],
            sexData: [
                { 'label': 'Nam', 'value': 'Nam' },
                { 'label': 'Nữ', 'value': 'Nữ' },
                { 'label': 'Giới tính thứ 3', 'value': 'Giới tính thứ 3' },
            ],
            visitorData: [
                { 'label': 'Facebook', 'value': 'Facebook' },
                { 'label': 'Zalo', 'value': 'Zalo' },
                { 'label': 'Website', 'value': 'Website' },
                { 'label': 'Trực tiếp đến cửa hàng', 'value': 'Trực tiếp đến cửa hàng' },
                { 'label': 'Đến từ các nguồn khác', 'value': 'Đến từ các nguồn khác' }
            ]
        }
    }

    render() {
        this.context.setTitle('Quản lý cơ hội');
        this.context.setActiveMenu('lead');
        return (
            <Pane className='pt-3 flex items-start content-start'>
                <Pane className='box-shadow-default flex flex-col p-4 mr-6 rounded-md w-500 self-stretch'>
                    <Pane className='text-lg not-italic font-semibold pb-6'>
                        Tạo cơ hội mới
                    </Pane>
                    <Pane className='pb-3'>
                        <TextForm label='Số điện thoại' />
                    </Pane>
                    <Pane className='pb-3 flex'>
                        <Pane className='mr-3 flex-grow'>
                            <TextForm label='Tên khách hàng' />
                        </Pane>
                        <Pane className='pt-2 px-1 sv-bgr w-150 rounded-md'>
                            <Pane className='pl-3'>
                                <label>Giới tính</label>
                            </Pane>
                            <SelectPicker data={this.state.sexData} style={{ width: 146 }} searchable={false} placeholder='Chọn giới tính' appearance='subtle' />
                        </Pane>
                    </Pane>
                    <Pane className='pb-3'>
                        <TextForm label='Địa chỉ' />
                    </Pane>
                    <Pane className='pb-3'>
                        <Pane className='sv-bgr h-16 pl-1 pr-2 py-2 w-full rounded-md flex items-center'>
                            <CheckPicker data={this.state.serviceData} style={{ width: 460 }} appearance='subtle' searchable={false} placeholder='Lựa chọn dịch vụ' />
                        </Pane>
                    </Pane>
                    <Pane className='pb-3'>
                        <Pane className='picker pr-2 py-2 pl-1 h-16 w-auto flex flex-col rounder-md sv-bgr'>
                            <Pane className='pl-3'>
                                <label>Nguồn khách đến</label>
                            </Pane>
                            <SelectPicker data={this.state.visitorData} searchable={false} placeholder='Lựa chọn nguồn khách đến' appearance='subtle' />
                        </Pane>
                    </Pane>
                    <Pane className='pb-3'>
                        <Pane className='py-2 px-4 flex flex-col sv-bgr rounded-md'>
                            <label>Ghi chú</label>
                            <textarea rows='7' cols='60'></textarea>
                        </Pane>
                    </Pane>
                    <Pane className='pb-3 h-8 w-auto flex justify-end'>
                        <Button appearance="primary">
                            Tạo cơ hội
                        </Button>
                    </Pane>
                </Pane>

                <Pane className='flex flex-col p-4 box-shadow-default rounded-md w-full h-auto'>
                    <Pane className='flex justify-between h-12'>
                        <Pane className='text-lg not-italic font-semibold pb-6 w-763'>
                            Cơ hội đã tạo
                        </Pane>
                        <Pane className='flex flex-grow'>
                            <SearchBox placeholder='Tìm kiếm' />
                        </Pane>
                    </Pane>
                    <Pane className='group-titles flex'>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-200'>
                            Tên khách hàng
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-120'>
                            Số điện thoại
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-353'>
                            Dịch vụ quan tâm
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-100'>
                            Người tạo
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-150'>
                            Thời gian tạo
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs flex flex-grow justify-center'>
                            Action
                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-200'>
                            Phạm Phi Long
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120'>
                            0368980597
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-353'>
                            Nâng ngực
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100'>
                            longpp97
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            11:14:50 13/08/2021
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120 flex flex-grow justify-center'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-200'>
                            Phạm Phi Long
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120'>
                            0368980597
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-353'>
                            Nâng ngực
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100'>
                            longpp97
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            11:14:50 13/08/2021
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120 flex flex-grow justify-center'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-200'>
                            Phạm Phi Long
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120'>
                            0368980597
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-353'>
                            Nâng ngực
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100'>
                            longpp97
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            11:14:50 13/08/2021
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120 flex flex-grow justify-center'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-200'>
                            Phạm Phi Long
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120'>
                            0368980597
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-353'>
                            Nâng ngực
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100'>
                            longpp97
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            11:14:50 13/08/2021
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120 flex flex-grow justify-center'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-200'>
                            Phạm Phi Long
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120'>
                            0368980597
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-353'>
                            Nâng ngực
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100'>
                            longpp97
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            11:14:50 13/08/2021
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-120 flex flex-grow justify-center'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Pane>
                    </Pane>
                    <Pane className='pagination h-12 w-auto flex justify-center items-center'>
                        <Pagination
                            prev={true}
                            next={true}
                            ellipsis={true}
                            boundaryLinks={true}
                            activePage={1}
                            pages={1}
                            maxButtons={5}
                        />
                    </Pane>
                </Pane>
            </Pane>
        )
    }
}

LeadIndex.contextType = AppContext;

export default LeadIndex
