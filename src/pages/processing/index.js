import React, { Component } from 'react'
import AppContext from '../../context'
import { Pane } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { Pagination } from 'rsuite';
import SearchBox from '../../components/SearchBox';
import ChanceDetail from '../layouts/components/ChanceDetail';
import api from '../../interceptor/AxiosInterceptor';


export class ProcessingIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chanceData: [],
            id : null
        }
    }

    componentDidMount = () => {
        api.get('/index/getAllChance').then((res) => {
            this.setState({
                chanceData: res.data
            })
        })
    }


    render() {
        this.context.setTitle('Xử lý cơ hội');
        this.context.setActiveMenu('processing');
        return (
                <Pane className='pt-3 flex'>
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
                        {this.state.chanceData.map((chance, index) => {
                            console.log('State ID: ',this.state.id);
                            return (
                                <Link key={index} onClick={() => this.setState({id : chance._id})}>
                                    <Pane className='chance-item p-4 flex flex-col mb-2 cursor-pointer box-shadow-default rounded-md'>
                                        <Pane className='flex items-center justify-between'>
                                            <Pane className='flex flex-col flex-grow'>
                                                <Pane className='font-semibold text-sm'>{chance.customerName}</Pane>
                                                <Pane className='phone-color'>{chance.phoneNum}</Pane>
                                            </Pane>
                                            {(chance.status === 'Tư vấn thành công') &&
                                                <Pane className='rounded-md bg-green-success text-white text-xs py-0.5 px-2'>
                                                    {chance.status}
                                                </Pane>}
                                            {(chance.status === 'Đã chia việc') &&
                                                <Pane className='rounded-md bg-blue-checked text-white text-xs py-0.5 px-2'>
                                                    {chance.status}
                                                </Pane>}
                                            {(chance.status === 'Gọi lần 1') &&
                                                <Pane className='flex justify-center items-center bg-white-smoke rounded-md text-xs py-0.5 px-2'>
                                                    <Pane className="h-2 w-2 rounded-lg mr-2 bg-green-success"></Pane>
                                                    Gọi lần 1
                                                </Pane>}
                                        </Pane>
                                        <Pane className='flex justify-between'>
                                            <Pane className='w-180 flex flex-shrink'>
                                                {chance.service.join(', ')}
                                            </Pane>
                                            <Pane className=''>
                                                {chance.createdTime}
                                            </Pane>
                                        </Pane>
                                    </Pane>
                                </Link>
                            )
                        })}
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
                    {(this.state.id !== null) ? <ChanceDetail id={this.state.id}/> : null}
                    
                </Pane>
        )
    }
}

ProcessingIndex.contextType = AppContext;

export default ProcessingIndex
