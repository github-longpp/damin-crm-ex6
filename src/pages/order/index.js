import React, { Component } from 'react'
import AppContext from '../../context'
import { Pane, Button } from 'evergreen-ui';
import { Pagination } from 'rsuite';
import SearchBox from '../../components/SearchBox';

export class OrderIndex extends Component {
    render() {
        this.context.setTitle('Quản lý phiếu khám');
        this.context.setActiveMenu('order');
        return (
            <Pane className='pt-3'>
                <Pane className='mr-6 w-350 flex flex-col'>
                    <Pane className='flex w-full mb-2'>
                        <SearchBox placeholder='Tìm kiếm phiếu khám' />
                        <Pane className='ml-2 pb-3 h-8 w-auto flex justify-end'>
                            <Button appearance="primary">
                                Tạo phiếu khám
                            </Button>
                        </Pane>
                    </Pane>
                    <Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                        <Pane className='flex items-center justify-between'>
                            <Pane className='flex flex-col flex-grow'>
                                <Pane className='font-semibold text-sm'>Phạm Phi Long 2</Pane>
                                <Pane className='phone-color'>0123456789</Pane>
                            </Pane>
                            <Pane className='rounded-md bg-blue-checked text-white text-xs py-0.5 px-2'>
                                Đang mở
                            </Pane>
                        </Pane>
                        <Pane className='flex justify-between'>
                            <Pane>
                                Triệt lông mũi, Tắm trắng
                            </Pane>
                            <Pane>
                                08:10 11/11/2020
                            </Pane>
                        </Pane>
                    </Pane>
                    <Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                        <Pane className='flex items-center justify-between'>
                            <Pane className='flex flex-col flex-grow'>
                                <Pane className='font-semibold text-sm'>Phạm Phi Long 2</Pane>
                                <Pane className='phone-color'>0123456789</Pane>
                            </Pane>
                            <Pane className='rounded-md bg-blue-checked text-white text-xs py-0.5 px-2'>
                                Đang mở
                            </Pane>
                        </Pane>
                        <Pane className='flex justify-between'>
                            <Pane>
                                Triệt lông mũi, Tắm trắng
                            </Pane>
                            <Pane>
                                08:10 11/11/2020
                            </Pane>
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

OrderIndex.contextType = AppContext;

export default OrderIndex
