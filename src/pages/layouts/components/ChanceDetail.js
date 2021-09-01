import React from 'react'
import { Pane, Button } from 'evergreen-ui'
import TextForm from '../../../components/TextForm';
import { SelectPicker } from 'rsuite'
import api from '../../../interceptor/AxiosInterceptor';
import { Component } from 'react';
export class ChanceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            
        }
    }

    render() {
        console.log('Child ID: ',this.props.id);
        console.log('data', this.state.data);
        if (this.state.id === null ) {
            return null
        }
        if (this.props.id !== this.state.id) {
            this.setState({id : this.props.id})
            api.get(`index/getOneChance/${this.props.id}`).then((res) => {
                this.setState({data: res.data})
            })
        }
        return (
            <Pane className="box-shadow-default p-4 rounded-md flex flex-col flex-grow">
                <Pane className='flex justify-between pb-6'>
                    <Pane className='text-lg font-semibold'>Chi tiết cơ hội</Pane>
                    <Pane className='font-bold text-sm'>Unique ID: 1</Pane>
                </Pane>
                <Pane className='flex'>
                    <Pane className='flex flex-col mr-3 flex-1'>
                        <Pane className='flex'>
                            <Pane className='flex flex-grow mr-6 mb-2 flex-col'>
                                <Pane className=''>Tên khách hàng</Pane>
                                <Pane className='text-base'>{this.state.data.customerName}</Pane>
                            </Pane>
                            <Pane className='mr-6 mb-2 flex flex-col'>
                                <Pane className=''>Điện thoại</Pane>
                                <Pane className='text-base phone-color'>{this.state.data.phoneNum}</Pane>
                            </Pane>
                            <Pane className='mr-6 mb-2 flex flex-col'>
                                <Pane className=''>Giới tính</Pane>
                                <Pane className='text-base'>{this.state.data.sex}</Pane>
                            </Pane>
                        </Pane>
                        <Pane className='mb-2'>
                            <Pane className=''>Địa chỉ</Pane>
                            <Pane className='text-base'>{this.state.data.address}</Pane>
                        </Pane>
                        <Pane className='mb-2'>
                            <Pane className=''>Nguồn khách đến</Pane>
                            <Pane className='text-base'>{this.state.data.customerSource}</Pane>
                        </Pane>
                        <Pane className='mb-2'>
                            <Pane className=''>Dịch vụ khách hàng quan tâm</Pane>
                            <Pane className='text-base'>{(this.state.data.service) ? this.state.data.service.join(', ') : null}</Pane>
                        </Pane>
                        <Pane className=''>
                            <Pane>Ảnh đính kèm</Pane>
                        </Pane>
                    </Pane>
                    <Pane className='flex flex-col flex-1'>
                        <Pane className='pt-2 px-1 sv-bgr w-full rounded-md mb-3'>
                            <Pane className='pl-3'>
                                <label>Trạng thái</label>
                            </Pane>
                            <SelectPicker data={[
                                { 'label': 'Gọi lần 1', 'value': 'Gọi lần 1' },
                                { 'label': 'Gọi lần 2', 'value': 'Gọi lần 2' },
                                { 'label': 'KH từ chối', 'value': 'KH từ chối' },
                                { 'label': 'Tư vấn thành công', 'value': 'Tư vấn thành công' },
                                { 'label': 'Đã đóng', 'value': 'Đã đóng' },
                            ]} style={{ width: 580 }} searchable={false}
                                placeholder={this.state.data.status} appearance='subtle'
                            />
                        </Pane>

                        <Pane className='pb-3'>
                            <TextForm label='Lý do đổi trạng thái' />
                        </Pane>
                        <Pane className='pb-3'>
                            <Pane className='py-2 px-4 flex flex-col sv-bgr rounded-md'>
                                <label>Ghi chú</label>
                                <textarea rows='3' cols='60'value={this.state.data.note} />
                            </Pane>
                        </Pane>
                        <Pane className='pb-3 h-8 w-auto flex justify-end'>
                            <Button appearance="primary">
                                Lưu thông tin
                            </Button>
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        )
    }

}

export default ChanceDetail;
