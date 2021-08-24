import React, { Component } from 'react'
import AppContext from '../../context'
import { Pane } from 'evergreen-ui';
import { Pagination } from 'rsuite';
import SearchBox from '../../components/SearchBox';

export class ProcessingIndex extends Component {
    render() {
        this.context.setTitle('Xử lý cơ hội');
        this.context.setActiveMenu('processing');
        return (
            <Pane className='pt-3'>
                <Pane className='mr-6 w-350 flex flex-col'>
                    <Pane className='w-full mb-2'>
                        <SearchBox placeholder='Tìm kiếm cơ hội' />
                    </Pane>
                    <Pane className='mb-3 flex flex-wrap'>
                        <Pane className='count mr-2 mb-2 cursor-pointer rounded-md'>
                            <p>Đã chia việc (1)</p>
                        </Pane>
                        <Pane className='count mr-2 mb-2 cursor-pointer rounded-md'>
                            <p>Gọi lần 1 (1)</p>
                        </Pane>
                        <Pane className='count mr-2 mb-2 cursor-pointer rounded-md'>
                            <p>Tư vấn thành công (1)</p>
                        </Pane>
                    </Pane>
                    <Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                        <Pane className='flex items-center justify-between'>
                            <Pane className='flex flex-col flex-grow'>
                                <Pane className='font-semibold text-sm'>Phạm Phi Long</Pane>
                                <Pane className='phone-color'>0368980597</Pane>
                            </Pane>
                            <Pane className='rounded-md bg-green-success text-white text-xs py-0.5 px-2'>
                                Tư vấn thành công
                            </Pane>
                        </Pane>
                        <Pane className='flex justify-between'>
                            <Pane>
                                Nâng ngực, Tắm trắng
                            </Pane>
                            <Pane>
                                12:34 11/11/2020
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
                                Đã chia việc
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
                                <Pane className='font-semibold text-sm'><p>Phạm Phi Long 3</p></Pane>
                                <Pane className='phone-color'>0345999999</Pane>
                            </Pane>
                            <Pane className='flex justify-center items-center bg-white-smoke rounded-md text-xs py-0.5 px-2'>
                                <div class="h-2 w-2 rounded-lg mr-2 bg-green-success"></div>
                                Gọi lần 1
                            </Pane>
                        </Pane>
                        <Pane className='flex justify-between'>
                            <Pane>
                                <p>Nâng ngực, Tắm trắng</p>
                            </Pane>
                            <Pane>
                                <p>12:34 11/11/2020</p>
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

ProcessingIndex.contextType = AppContext;

export default ProcessingIndex
