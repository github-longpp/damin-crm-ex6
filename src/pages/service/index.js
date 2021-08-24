import { React, Component } from 'react'
import AppContext from '../../context';
import { Pane, Button } from 'evergreen-ui';
import { Pagination } from 'rsuite';
import TextForm from '../../components/TextForm';
import 'rsuite/dist/styles/rsuite-default.css';

export class ServiceIndex extends Component {

    render() {
        this.context.setTitle('Quản lý dịch vụ');
        this.context.setActiveMenu('service');
        return (
            <Pane className='pt-3 flex items-start content-start w-full'>
                <Pane className='box-shadow-default w-500 flex flex-col p-4 mr-6 rounded-md'>
                    <Pane className='text-lg not-italic font-semibold pb-6'>
                        Tạo dịch vụ mới
                    </Pane>
                    <Pane className='pb-3'>
                        <TextForm label='Tên dịch vụ' />
                    </Pane>
                    <Pane className='pb-3'>
                        <TextForm label='Giá dịch vụ' />
                    </Pane>
                    <Pane className='pb-2 flex flex-col'>
                        <Pane className='flex justify-between mb-2'>
                            <Pane className='text-sm font-medium'>
                                Lịch hẹn tái khám
                            </Pane>
                            <Button>Thêm lịch hẹn</Button>
                        </Pane>
                        <Pane className='mb-3 flex items-center justify-center'>
                            Chưa có lịch hẹn
                        </Pane>
                    </Pane>
                    <Pane className='pb-3 h-8 w-auto'>
                        <Button appearance="primary">
                            Tạo dịch vụ
                        </Button>
                    </Pane>
                </Pane>

                <Pane className='flex flex-col p-4 box-shadow-default rounded-md h-auto flex-grow'>
                    <Pane className='text-lg not-italic font-semibold pb-6 w-763 h-12'>
                        Dánh sách dịch vụ
                    </Pane>
                    <Pane className='group-titles flex'>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-690'>
                            Tên dịch vụ
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-150'>
                            Chi phí
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-100 flex justify-center'>
                            Số lịch hẹn
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs flex flex-grow justify-center'>
                            Action
                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-690'>
                            Nâng ngực
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            10,000,000
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100 flex justify-center'>
                            1
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm flex flex-grow justify-center items-center'>
                        <Pane className='mr-2.5 ml-1'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Pane>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.7082 6.23975H3.75024" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-690'>
                            Tắm trắng
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            20,000,000
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100 flex justify-center'>
                            3
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm flex flex-grow justify-center items-center'>
                        <Pane className='mr-2.5 ml-1'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Pane>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.7082 6.23975H3.75024" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-690'>
                            Triệt lông
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            5,000,000
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100 flex justify-center'>
                            2
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm flex flex-grow justify-center items-center'>
                        <Pane className='mr-2.5 ml-1'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Pane>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.7082 6.23975H3.75024" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-690'>
                            Triệt lông mũi
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            18,000,000
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100 flex justify-center'>
                            4
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm flex flex-grow justify-center items-center'>
                        <Pane className='mr-2.5 ml-1'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Pane>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.7082 6.23975H3.75024" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-690'>
                            Triệt lông nách
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            22,000,000
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100 flex justify-center'>
                            2
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm flex flex-grow justify-center items-center'>
                        <Pane className='mr-2.5 ml-1'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Pane>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.7082 6.23975H3.75024" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-690'>
                            Nâng mí
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-150'>
                            30,000,000
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-100 flex justify-center'>
                            3
                        </Pane>
                        <Pane className='created-item h-10 font-normal text-sm flex flex-grow justify-center items-center'>
                            <Pane className='mr-2.5 ml-1'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Pane>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.325 9.46826C19.325 9.46826 18.782 16.2033 18.467 19.0403C18.317 20.3953 17.48 21.1893 16.109 21.2143C13.5 21.2613 10.888 21.2643 8.28003 21.2093C6.96103 21.1823 6.13803 20.3783 5.99103 19.0473C5.67403 16.1853 5.13403 9.46826 5.13403 9.46826" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.7082 6.23975H3.75024" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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

ServiceIndex.contextType = AppContext;

export default ServiceIndex
