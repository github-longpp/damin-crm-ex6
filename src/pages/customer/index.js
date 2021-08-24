import React, { Component } from 'react'
import AppContext from '../../context'
import { Pane, Button } from 'evergreen-ui';
import { Pagination } from 'rsuite';
import SearchBox from '../../components/SearchBox';

export class CustomerIndex extends Component {
    render() {
        this.context.setTitle('Quản lý khách hàng');
        this.context.setActiveMenu('customer');
        return (
            <Pane className='pt-3'>
                <Pane className='mr-6 w-350 flex flex-col'>
                    <Pane className='flex w-full mb-2'>
                        <SearchBox placeholder='Tìm kiếm khách hàng' />
                        <Pane className='ml-2 pb-3 h-8 w-auto flex justify-end'>
                            <Button appearance="primary">
                                Thêm khách hàng
                            </Button>
                        </Pane>
                    </Pane>
                    <Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                        <Pane className='flex items-center justify-between'>
                            <Pane className='flex flex-col flex-grow'>
                                <Pane className='font-semibold text-sm'>Phạm Phi Long 2</Pane>
                                <Pane className='phone-color'>0123456789</Pane>
                            </Pane>
                            <Pane className='py-0.5 px-2'>
                                Nam
                            </Pane>
                        </Pane>

                        <Pane>
                            Số 10 Nguyễn Chí Thanh, Hà Nội
                        </Pane>

                    </Pane>
                    <Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                        <Pane className='flex items-center justify-between'>
                            <Pane className='flex flex-col flex-grow'>
                                <Pane className='font-semibold text-sm'>Phạm Phi Long 2</Pane>
                                <Pane className='phone-color'>0123456789</Pane>
                            </Pane>
                            <Pane className='py-0.5 px-2'>
                                Nam
                            </Pane>
                        </Pane>

                        <Pane>
                            Số 10 Nguyễn Chí Thanh, Hà Nội
                        </Pane>

                    </Pane>
                    <Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                        <Pane className='flex items-center justify-between'>
                            <Pane className='flex flex-col flex-grow'>
                                <Pane className='font-semibold text-sm'>Phạm Phi Long 2</Pane>
                                <Pane className='phone-color'>0123456789</Pane>
                            </Pane>
                            <Pane className='py-0.5 px-2'>
                                Nữ
                            </Pane>
                        </Pane>

                        <Pane>
                            Số 10 Nguyễn Chí Thanh, Hà Nội
                        </Pane>

                    </Pane><Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                        <Pane className='flex items-center justify-between'>
                            <Pane className='flex flex-col flex-grow'>
                                <Pane className='font-semibold text-sm'>Phạm Phi Long 2</Pane>
                                <Pane className='phone-color'>0123456789</Pane>
                            </Pane>
                            <Pane className='py-0.5 px-2'>
                                Giới tính thứ 3
                            </Pane>
                        </Pane>

                        <Pane>
                            Số 10 Nguyễn Chí Thanh, Hà Nội
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

CustomerIndex.contextType = AppContext;

export default CustomerIndex
