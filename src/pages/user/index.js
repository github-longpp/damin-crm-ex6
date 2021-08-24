import { React, Component } from 'react'
import AppContext from '../../context';
import { Pane, Button, Checkbox } from 'evergreen-ui';
import { SelectPicker, Pagination, Button as ButtonRsuite } from 'rsuite';
import TextForm from '../../components/TextForm';
import 'rsuite/dist/styles/rsuite-default.css';

export class UserIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roleUser: [
                { 'label': 'Hỗ trợ khách hàng', 'value': 'Hỗ trợ khách hàng' },
                { 'label': 'Telesale', 'value': 'Telesale' },
                { 'label': 'Nhân viên bán hàng', 'value': 'Nhân viên bán hàng' },
                { 'label': 'Bác sĩ', 'value': 'Bác sĩ' },
                { 'label': 'Điều dưỡng', 'value': 'Điều dưỡng' },
                { 'label': 'Quản lý', 'value': 'Quản lý' }
            ],
        }
    }
    setChecked = (e, loc) => {
        switch (loc) {
            case 'c1':
                this.setState({
                    checked1: e
                })
                return;
            case 'c2':
                this.setState({
                    checked2: e
                })
                return;
            case 'c3':
                this.setState({
                    checked3: e
                })
                return;
            case 'c4':
                this.setState({
                    checked4: e
                })
                return;
            case 'c5':
                this.setState({
                    checked5: e
                })
                return;
            case 'c6':
                this.setState({
                    checked6: e
                })
                return;
            case 'c7':
                this.setState({
                    checked7: e
                })
                return;
            case 'c8':
                this.setState({
                    checked8: e
                })
                return;
            case 'c9':
                this.setState({
                    checked9: e
                })
                return;
            case 'c10':
                this.setState({
                    checked10: e
                })
                return;
            case 'c11':
                this.setState({
                    checked11: e
                })
                return;
            case 'c12':
                this.setState({
                    checked12: e
                })
                return;
            case 'c13':
                this.setState({
                    checked13: e
                })
                return;
            case 'c14':
                this.setState({
                    checked14: e
                })
                return;
            case 'c15':
                this.setState({
                    checked15: e
                })
                return;
            case 'c16':
                this.setState({
                    checked16: e
                })
                return;
            case 'c17':
                this.setState({
                    checked17: e
                })
                return;
            case 'c18':
                this.setState({
                    checked18: e
                })
                return;
            case 'c19':
                this.setState({
                    checked19: e
                })
                return;
            case 'c20':
                this.setState({
                    checked20: e
                })
                return;
            default:
                return;
        }

    }

    selectAll = () => {
        this.setState({
            checked1 : true,
            checked2 : true,
            checked3 : true,
            checked4 : true,
            checked5 : true,
            checked6 : true,
            checked7 : true,
            checked8 : true,
            checked9 : true,
            checked10 : true,
            checked11 : true,
            checked12: true,
            checked13 : true,
            checked14: true,
            checked15 : true,
            checked16 : true,
            checked17 : true,
            checked18 : true,
            checked19 : true,
            checked20 : true,
        })
    }
    render() {
        this.context.setTitle('Quản lý người dùng');
        this.context.setActiveMenu('user');
        return (
            <Pane className='pt-3 flex items-start content-start w-full'>
                <Pane className='box-shadow-default w-500 flex flex-col p-4 mr-6 rounded-md'>
                    <Pane className='text-lg not-italic font-semibold pb-6'>
                        Tạo tài khoản người dùng
                    </Pane>
                    <Pane className='pb-3'>
                        <TextForm label='Tài khoản' />
                    </Pane>
                    <Pane className='pb-3'>
                        <TextForm label='Mật khẩu' />
                    </Pane>
                    <Pane className='pb-3'>
                        <TextForm label='Email' />
                    </Pane>
                    <Pane className='pb-2'>
                        <Pane className='picker pr-2 py-2 pl-1 h-16 w-auto flex flex-col rounder-md sv-bgr'>
                            <Pane className='pl-3'>
                                <label>Vai trò</label>
                            </Pane>
                            <SelectPicker data={this.state.roleUser} searchable={false}
                                placeholder='Lựa chọn vai trò của tài khoản trong hệ thống' appearance='subtle' />
                        </Pane>
                    </Pane>
                    <Pane className='my-2'>
                        <hr />
                    </Pane>
                    <Pane className='flex flex-col'>
                        <Pane className='flex justify-between items-center mb-2'>
                            <Pane className='font-semibold text-base'>
                                Phân quyền cho tài khoản
                            </Pane>
                            <ButtonRsuite appearance="subtle" onClick={this.selectAll}>Chọn tất cả</ButtonRsuite>
                        </Pane>
                    </Pane>
                    <Pane className='mb-2 flex flex-col'>
                        <Pane className='text-sm font-medium'>Quản lý cơ hội</Pane>
                        <Pane className='text-xs'>
                            <Checkbox checked={this.state.checked1} label='Đọc thông tin cơ hội'
                                onChange={e => this.setChecked(e.target.checked, 'c1')} />
                            <Checkbox checked={this.state.checked2} label='Thêm mới cơ hội'
                                onChange={e => this.setChecked(e.target.checked, 'c2')} />
                            <Checkbox checked={this.state.checked3} label='Sửa thông tin cơ hội'
                                onChange={e => this.setChecked(e.target.checked, 'c3')} />
                            <Checkbox checked={this.state.checked4} label='Xóa cơ hội'
                                onChange={e => this.setChecked(e.target.checked, 'c4')} />
                        </Pane>
                    </Pane>
                    <Pane className='mb-2 flex flex-col'>
                        <Pane className='text-sm font-medium'>Quản lý phiếu khám</Pane>
                        <Pane className='text-xs'>
                            <Checkbox checked={this.state.checked5} label='Đọc thông tin phiếu khám'
                                onChange={e => this.setChecked(e.target.checked, 'c5')} />
                            <Checkbox checked={this.state.checked6} label='Thêm mới phiếu khám'
                                onChange={e => this.setChecked(e.target.checked, 'c6')} />
                            <Checkbox checked={this.state.checked7} label='Sửa thông tin phiếu khám'
                                onChange={e => this.setChecked(e.target.checked, 'c7')} />
                            <Checkbox checked={this.state.checked8} label='Xóa phiếu khám'
                                onChange={e => this.setChecked(e.target.checked, 'c8')} />
                        </Pane>
                    </Pane>
                    <Pane className='mb-2 flex flex-col'>
                        <Pane className='text-sm font-medium'>Quản lý khách hàng</Pane>
                        <Pane className='text-xs'>
                            <Checkbox checked={this.state.checked9} label='Đọc thông tin khách hàng'
                                onChange={e => this.setChecked(e.target.checked, 'c9')} />
                            <Checkbox checked={this.state.checked10} label='Thêm mới khách hàng'
                                onChange={e => this.setChecked(e.target.checked, 'c10')} />
                            <Checkbox checked={this.state.checked11} label='Sửa thông tin khách hàng'
                                onChange={e => this.setChecked(e.target.checked, 'c11')} />
                            <Checkbox checked={this.state.checked12} label='Xóa khách hàng'
                                onChange={e => this.setChecked(e.target.checked, 'c12')} />
                        </Pane>
                    </Pane>
                    <Pane className='mb-2 flex flex-col'>
                        <Pane className='text-sm font-medium'>Quản lý dịch vụ</Pane>
                        <Pane className='text-xs'>
                            <Checkbox checked={this.state.checked13} label='Đọc thông tin dịch vụ'
                                onChange={e => this.setChecked(e.target.checked, 'c13')} />
                            <Checkbox checked={this.state.checked14} label='Thêm mới dịch vụ'
                                onChange={e => this.setChecked(e.target.checked, 'c14')} />
                            <Checkbox checked={this.state.checked15} label='Sửa thông tin dịch vụ'
                                onChange={e => this.setChecked(e.target.checked, 'c15')} />
                            <Checkbox checked={this.state.checked16} label='Xóa dịch vụ'
                                onChange={e => this.setChecked(e.target.checked, 'c16')} />
                        </Pane>
                    </Pane>
                    <Pane className='mb-2 flex flex-col'>
                        <Pane className='text-sm font-medium'>Quản lý người dùng</Pane>
                        <Pane className='text-xs'>
                            <Checkbox checked={this.state.checked17} label='Đọc thông tin người dùng'
                                onChange={e => this.setChecked(e.target.checked, 'c17')} />
                            <Checkbox checked={this.state.checked18} label='Thêm mới người dùng'
                                onChange={e => this.setChecked(e.target.checked, 'c18')} />
                            <Checkbox checked={this.state.checked19} label='Sửa thông tin người dùng'
                                onChange={e => this.setChecked(e.target.checked, 'c19')} />
                            <Checkbox checked={this.state.checked20} label='Xóa người dùng'
                                onChange={e => this.setChecked(e.target.checked, 'c20')} />
                        </Pane>
                    </Pane>
                    <Pane className='pb-3 h-8 w-auto'>
                        <Button appearance="primary">
                            Tạo tài khoản
                        </Button>
                    </Pane>
                </Pane>

                <Pane className='flex flex-col p-4 box-shadow-default rounded-md h-auto flex-grow'>
                    <Pane className='text-lg not-italic font-semibold pb-6 w-763 h-12'>
                        Dánh sách tài khoản
                    </Pane>
                    <Pane className='group-titles flex'>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-200'>
                            Tên tài khoản
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-500'>
                            Email
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs w-200 flex'>
                            Vai trò
                        </Pane>
                        <Pane className='chance-title h-10 p-2.5 font-normal text-xs flex flex-grow justify-center'>
                            Action
                        </Pane>
                    </Pane>
                    <Pane className='created-chance flex'>
                        <Pane className='created-item font-semibold text-sm w-200'>
                            longpp97
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-500'>
                            longit.cqb@gmail.com
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-200 flex'>
                            Quản lý
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
                        <Pane className='created-item font-semibold text-sm w-200'>
                            longpp979797
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-500'>
                            longit.cqb@gmail.com
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-200 flex'>
                            Telesale
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
                        <Pane className='created-item font-semibold text-sm w-200'>
                            longpp97123124
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-500'>
                            longit.cqb@gmail.com
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-200 flex'>
                            bác sĩ
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
                        <Pane className='created-item font-semibold text-sm w-200'>
                            longpp1997
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-500'>
                            longit.cqb@gmail.com
                        </Pane>
                        <Pane className='created-item h-10 p-2.5 font-normal text-sm w-200 flex'>
                            Điều dưỡng
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

UserIndex.contextType = AppContext;

export default UserIndex
