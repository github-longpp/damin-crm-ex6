import React, { Component } from 'react'
import AppContext from '../../context'
import { Pane } from 'evergreen-ui';
import { DatePicker } from 'rsuite';
import moment from 'moment';

export class CalendarIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDate : moment().format('DD/MM/YYYY'),
            tomorrow: moment().add(1,'days').format('DD/MM/YYYY'),
            nextTomorrow: moment().add(2,'days').format('DD/MM/YYYY'),
        }
    }

    getDate = (e) => {
        console.log(e);
        this.setState({
            selectDate : moment(e).format('DD/MM/YYYY'),
            tomorrow : moment(e).add(1,'days').format('DD/MM/YYYY'),
            nextTomorrow : moment(e).add(2,'days').format('DD/MM/YYYY'),
        })
    }
    
    render() {
        
        this.context.setTitle('Lịch');
        this.context.setActiveMenu('calendar');
        return (
            <Pane className='w-full'>
                <Pane className='flex flex-col pt-2 px-1 sv-bgr w-150 rounded-md w-400'>
                    <Pane className='pl-3'>
                        <label>Chọn ngày bạn muốn xem lịch</label>
                    </Pane>
                    <DatePicker style={{ width: 380 }} format='DD/MM/YYYY' onChange={(date) => this.getDate(date)} appearance='subtle' />
                </Pane>
                <Pane className='grid grid-cols-3 gap-12'>
                    <Pane className='text-lg font-semibold py-4'>
                        Ngày {this.state.selectDate}
                    </Pane>
                    <Pane className='text-lg font-semibold py-4'>
                        Ngày {this.state.tomorrow}
                    </Pane>
                    <Pane className='text-lg font-semibold py-4'>
                        Ngày {this.state.nextTomorrow}
                    </Pane>
                </Pane>
            </Pane>
        )
    }
}

CalendarIndex.contextType = AppContext;

export default CalendarIndex
