import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pane } from 'evergreen-ui';
import AppContext from '../../../context';


export class Sidebar extends Component {
    render() {
        return (
            <Pane className='sidebar'>
                <Pane flexDirection='column' className='flex h-full px-4 py-3'>
                    <Pane className='menu-title w-auto flex justify-between items-center mb-8'>
                        <svg width="108" height="35" viewBox="0 0 108 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.11503 19.9371C8.78445 15.7599 12.7807 11.1924 13.9992 9.85678V8.42676L13.6413 8.80035C13.3839 9.06864 8.69459 13.9972 6.50134 18.8757C6.3216 19.276 6.15887 19.6755 6.01638 20.0725C5.62452 21.1641 5.38488 22.2339 5.38488 23.2268C5.38488 30.0685 12.903 31.3439 12.9791 31.3556L13.5523 31.4467L12.5451 30.2657C10.8878 29.8445 6.3718 28.2373 6.3718 23.2259C6.3718 22.5205 6.50782 21.7658 6.74503 20.9844C6.79604 20.813 7.07374 20.075 7.11503 19.9371Z" fill="black" />
                            <path d="M2.03388 20.8724C2.03388 18.7938 2.39821 16.4803 3.98181 13.8735C4.10164 12.879 4.334 11.9044 4.72504 10.9851C1.71084 14.5221 1 18.3333 1 20.8724C1 29.9272 8.61282 34 14.0186 34V32.9795C9.04191 32.9795 2.03388 29.2235 2.03388 20.8724Z" fill="black" />
                            <path d="M13.9992 2.28125V1L13.6826 1.2616C13.5936 1.33515 11.4675 3.09948 9.30747 5.6528C6.36937 9.1263 4.87968 12.2396 4.87968 14.9066C4.87968 15.4632 4.89992 16.0207 4.95416 16.5748C5.00112 17.0537 5.07318 17.5301 5.18409 17.999C5.28206 18.4143 5.41079 18.8222 5.57757 19.2159C5.69091 19.4825 5.81317 19.7407 5.96861 19.9848C6.11353 20.2129 6.27465 20.4311 6.44952 20.6367C6.82195 21.0755 7.25914 21.429 7.71738 21.7759C7.95217 21.9539 8.19506 22.1378 8.4177 22.3308C10.951 24.5306 12.3686 27.2594 12.5443 30.2557L13.5515 31.4367L13.5499 30.8633C13.5418 27.3405 11.9922 24.1378 9.06944 21.5995C8.8217 21.3847 8.56586 21.19 8.31731 21.0028C8.09628 20.8348 7.87364 20.6676 7.66314 20.4871C7.56032 20.3985 7.46073 20.3074 7.3652 20.2113C7.31824 20.1636 7.27209 20.1152 7.22837 20.065C7.07293 19.8895 6.93529 19.6989 6.81223 19.5C6.68674 19.2969 6.59363 19.0846 6.49891 18.8657C6.06415 17.8577 5.86498 16.5915 5.86498 14.9066C5.8666 9.71302 12.4625 3.6277 13.9992 2.28125Z" fill="black" />
                            <path d="M20.8485 19.9371C19.1791 15.7599 15.1828 11.1924 13.9644 9.85678V8.42676L14.3222 8.80035C14.5797 9.06864 19.269 13.9972 21.4622 18.8757C21.642 19.276 21.8047 19.6755 21.9472 20.0725C22.339 21.1641 22.5787 22.2339 22.5787 23.2268C22.5787 30.0685 15.0606 31.3439 14.9845 31.3556L14.4113 31.4467L15.4184 30.2657C17.0757 29.8445 21.5918 28.2373 21.5918 23.2259C21.5918 22.5205 21.4557 21.7658 21.2185 20.9844C21.1675 20.813 20.8898 20.075 20.8485 19.9371Z" fill="black" />
                            <path d="M25.9661 20.8724C25.9661 18.7938 25.6018 16.4803 24.0182 13.8735C23.8984 12.879 23.666 11.9044 23.275 10.9851C26.2892 14.5213 27 18.3324 27 20.8715C27 29.9264 19.3872 33.9992 13.9814 33.9992V32.9787C18.9581 32.9795 25.9661 29.2235 25.9661 20.8724Z" fill="black" />
                            <path d="M13.9644 2.28125V1L14.2809 1.2616C14.37 1.33515 16.496 3.09948 18.6561 5.6528C21.5942 9.1263 23.0839 12.2396 23.0839 14.9066C23.0839 15.4632 23.0636 16.0207 23.0094 16.5748C22.9624 17.0537 22.8904 17.5301 22.7795 17.999C22.6815 18.4143 22.5528 18.8222 22.386 19.2159C22.2727 19.4825 22.1504 19.7407 21.995 19.9848C21.85 20.2129 21.6889 20.4311 21.514 20.6367C21.1416 21.0755 20.7044 21.429 20.2462 21.7759C20.0114 21.9539 19.7685 22.1378 19.5459 22.3308C17.0126 24.5306 15.5949 27.2594 15.4193 30.2557L14.4121 31.4367L14.4137 30.8633C14.4218 27.3405 15.9714 24.1378 18.8941 21.5995C19.1419 21.3847 19.3977 21.19 19.6463 21.0028C19.8673 20.8348 20.0899 20.6676 20.3004 20.4871C20.4032 20.3985 20.5028 20.3074 20.5984 20.2113C20.6453 20.1636 20.6915 20.1152 20.7352 20.065C20.8906 19.8895 21.0283 19.6989 21.1513 19.5C21.2768 19.2969 21.3699 19.0846 21.4647 18.8657C21.8994 17.8577 22.0986 16.5915 22.0986 14.9066C22.097 9.71302 15.501 3.6277 13.9644 2.28125Z" fill="black" />
                            <path d="M7.11503 19.9371C8.78445 15.7599 12.7807 11.1924 13.9992 9.85678V8.42676L13.6413 8.80035C13.3839 9.06864 8.69459 13.9972 6.50134 18.8757C6.3216 19.276 6.15887 19.6755 6.01638 20.0725C5.62452 21.1641 5.38488 22.2339 5.38488 23.2268C5.38488 30.0685 12.903 31.3439 12.9791 31.3556L13.5523 31.4467L12.5451 30.2657C10.8878 29.8445 6.3718 28.2373 6.3718 23.2259C6.3718 22.5205 6.50782 21.7658 6.74503 20.9844C6.79604 20.813 7.07374 20.075 7.11503 19.9371Z" stroke="black" stroke-width="0.3" />
                            <path d="M2.03388 20.8724C2.03388 18.7938 2.39821 16.4803 3.98181 13.8735C4.10164 12.879 4.334 11.9044 4.72504 10.9851C1.71084 14.5221 1 18.3333 1 20.8724C1 29.9272 8.61282 34 14.0186 34V32.9795C9.04191 32.9795 2.03388 29.2235 2.03388 20.8724Z" stroke="black" stroke-width="0.3" />
                            <path d="M13.9992 2.28125V1L13.6826 1.2616C13.5936 1.33515 11.4675 3.09948 9.30747 5.6528C6.36937 9.1263 4.87968 12.2396 4.87968 14.9066C4.87968 15.4632 4.89992 16.0207 4.95416 16.5748C5.00112 17.0537 5.07318 17.5301 5.18409 17.999C5.28206 18.4143 5.41079 18.8222 5.57757 19.2159C5.69091 19.4825 5.81317 19.7407 5.96861 19.9848C6.11353 20.2129 6.27465 20.4311 6.44952 20.6367C6.82195 21.0755 7.25914 21.429 7.71738 21.7759C7.95217 21.9539 8.19506 22.1378 8.4177 22.3308C10.951 24.5306 12.3686 27.2594 12.5443 30.2557L13.5515 31.4367L13.5499 30.8633C13.5418 27.3405 11.9922 24.1378 9.06944 21.5995C8.8217 21.3847 8.56586 21.19 8.31731 21.0028C8.09628 20.8348 7.87364 20.6676 7.66314 20.4871C7.56032 20.3985 7.46073 20.3074 7.3652 20.2113C7.31824 20.1636 7.27209 20.1152 7.22837 20.065C7.07293 19.8895 6.93529 19.6989 6.81223 19.5C6.68674 19.2969 6.59363 19.0846 6.49891 18.8657C6.06415 17.8577 5.86498 16.5915 5.86498 14.9066C5.8666 9.71302 12.4625 3.6277 13.9992 2.28125Z" stroke="black" stroke-width="0.3" />
                            <path d="M20.8485 19.9371C19.1791 15.7599 15.1828 11.1924 13.9644 9.85678V8.42676L14.3222 8.80035C14.5797 9.06864 19.269 13.9972 21.4622 18.8757C21.642 19.276 21.8047 19.6755 21.9472 20.0725C22.339 21.1641 22.5787 22.2339 22.5787 23.2268C22.5787 30.0685 15.0606 31.3439 14.9845 31.3556L14.4113 31.4467L15.4184 30.2657C17.0757 29.8445 21.5918 28.2373 21.5918 23.2259C21.5918 22.5205 21.4557 21.7658 21.2185 20.9844C21.1675 20.813 20.8898 20.075 20.8485 19.9371Z" stroke="black" stroke-width="0.3" />
                            <path d="M25.9661 20.8724C25.9661 18.7938 25.6018 16.4803 24.0182 13.8735C23.8984 12.879 23.666 11.9044 23.275 10.9851C26.2892 14.5213 27 18.3324 27 20.8715C27 29.9264 19.3872 33.9992 13.9814 33.9992V32.9787C18.9581 32.9795 25.9661 29.2235 25.9661 20.8724Z" stroke="black" stroke-width="0.3" />
                            <path d="M13.9644 2.28125V1L14.2809 1.2616C14.37 1.33515 16.496 3.09948 18.6561 5.6528C21.5942 9.1263 23.0839 12.2396 23.0839 14.9066C23.0839 15.4632 23.0636 16.0207 23.0094 16.5748C22.9624 17.0537 22.8904 17.5301 22.7795 17.999C22.6815 18.4143 22.5528 18.8222 22.386 19.2159C22.2727 19.4825 22.1504 19.7407 21.995 19.9848C21.85 20.2129 21.6889 20.4311 21.514 20.6367C21.1416 21.0755 20.7044 21.429 20.2462 21.7759C20.0114 21.9539 19.7685 22.1378 19.5459 22.3308C17.0126 24.5306 15.5949 27.2594 15.4193 30.2557L14.4121 31.4367L14.4137 30.8633C14.4218 27.3405 15.9714 24.1378 18.8941 21.5995C19.1419 21.3847 19.3977 21.19 19.6463 21.0028C19.8673 20.8348 20.0899 20.6676 20.3004 20.4871C20.4032 20.3985 20.5028 20.3074 20.5984 20.2113C20.6453 20.1636 20.6915 20.1152 20.7352 20.065C20.8906 19.8895 21.0283 19.6989 21.1513 19.5C21.2768 19.2969 21.3699 19.0846 21.4647 18.8657C21.8994 17.8577 22.0986 16.5915 22.0986 14.9066C22.097 9.71302 15.501 3.6277 13.9644 2.28125Z" stroke="black" stroke-width="0.3" />
                            <path d="M41.6818 26C46.3352 26 49.0945 23.1214 49.0945 18.3487C49.0945 13.5909 46.3352 10.7273 41.7862 10.7273H36.5064V26H41.6818ZM39.2731 23.6062V13.1211H41.6296C44.7319 13.1211 46.3501 14.8512 46.3501 18.3487C46.3501 21.8612 44.7319 23.6062 41.5476 23.6062H39.2731ZM53.8642 26L55.1245 22.234H60.8667L62.1344 26H65.0875L59.7033 10.7273H56.2878L50.911 26H53.8642ZM55.8702 20.0117L57.9359 13.8594H58.0552L60.1209 20.0117H55.8702ZM68.0992 10.7273V26H70.754V15.4851H70.8957L75.1166 25.9553H77.1002L81.3211 15.5075H81.4628V26H84.1176V10.7273H80.732L76.1979 21.794H76.0189L71.4848 10.7273H68.0992ZM90.8971 10.7273H88.1304V26H90.8971V10.7273ZM107.444 10.7273H104.692V21.1378H104.558L97.369 10.7273H94.8931V26H97.6598V15.5969H97.7866L104.983 26H107.444V10.7273Z" fill="black" />
                        </svg>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.01" cx="20" cy="20" r="20" fill="#E4E4E4" />
                            <path d="M30 20H11" stroke="#11142D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M30 12H21" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.301406" d="M30 28H21" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 15L10 20L15 25" stroke="#11142D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Pane>
                    <Pane className='flex flex-col'>
                        <Link to='/lead'>
                            <Pane className={`menu-item flex h-12 w-auto px-3 items-center cursor-pointer mt-2 rounded-md ${this.context.activeMenu === 'lead' ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Pane className='menu-text pl-4 font-medium leading-snug not-italic text-sm'>
                                    Quản lý cơ hội
                                </Pane>
                            </Pane>
                        </Link>
                        <Link to='/processing'>
                            <Pane className={`menu-item flex h-12 w-auto px-3 items-center cursor-pointer mt-2 rounded-md ${this.context.activeMenu === 'processing' ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.24487 14.7815L10.238 10.8914L13.6522 13.5733L16.5813 9.79297" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <circle cx="19.9954" cy="4.20027" r="1.9222" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.9245 3.12024H7.65679C4.64535 3.12024 2.77808 5.25296 2.77808 8.2644V16.3468C2.77808 19.3582 4.60874 21.4818 7.65679 21.4818H16.2609C19.2724 21.4818 21.1396 19.3582 21.1396 16.3468V9.30788" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Pane className='menu-text pl-4 font-medium leading-snug not-italic text-sm'>
                                    Xử lý cơ hội
                                </Pane>
                            </Pane>
                        </Link>
                        <Link to='/order'>
                            <Pane className={`menu-item flex h-12 w-auto px-3 items-center cursor-pointer mt-2 rounded-md ${this.context.activeMenu === 'order' ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7161 16.2234H8.49609" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.7161 12.0369H8.49609" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.2511 7.86011H8.49609" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9085 2.74976C15.9085 2.74976 8.23149 2.75376 8.21949 2.75376C5.45949 2.77076 3.75049 4.58676 3.75049 7.35676V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.35676C20.4155 4.57276 18.6925 2.74976 15.9085 2.74976Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Pane className='menu-text pl-4 font-medium leading-snug not-italic text-sm'>
                                    Quản lý phiếu khám
                                </Pane>
                            </Pane>
                        </Link>
                        <Link to='/calendar'>
                            <Pane className={`menu-item flex h-12 w-auto px-3 items-center cursor-pointer mt-2 rounded-md ${this.context.activeMenu === 'calendar' ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.09253 9.40421H20.9165" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.442 13.3097H16.4512" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0047 13.3097H12.014" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.55793 13.3097H7.5672" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.442 17.1962H16.4512" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0047 17.1962H12.014" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.55793 17.1962H7.5672" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.0438 2V5.29078" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.9654 2V5.29078" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Pane className='menu-text pl-4 font-medium leading-snug not-italic text-sm'>
                                    Lịch
                                </Pane>
                            </Pane>
                        </Link>
                        <Pane className='hr-item my-4'>
                            <hr />
                        </Pane>
                        <Link to='/customer'>
                            <Pane className={`menu-item flex h-12 w-auto px-3 items-center cursor-pointer mt-2 rounded-md ${this.context.activeMenu === 'customer' ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59157 12.0198C7.16957 12.0198 5.20557 10.0568 5.20557 7.63476C5.20557 5.21276 7.16957 3.24976 9.59157 3.24976C12.0126 3.24976 13.9766 5.21276 13.9766 7.63476C13.9856 10.0478 12.0356 12.0108 9.62257 12.0198H9.59157Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.4832 10.8815C18.0842 10.6565 19.3172 9.28253 19.3202 7.61953C19.3202 5.98053 18.1252 4.62053 16.5582 4.36353" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.5955 14.7322C20.1465 14.9632 21.2295 15.5072 21.2295 16.6272C21.2295 17.3982 20.7195 17.8982 19.8955 18.2112" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Pane className='menu-text pl-4 font-medium leading-snug not-italic text-sm'>
                                    Quản lý khách hàng
                                </Pane>
                            </Pane>
                        </Link>
                        <Link to='/service'>
                            <Pane className={`menu-item flex h-12 w-auto px-3 items-center cursor-pointer mt-2 rounded-md ${this.context.activeMenu === 'service' ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.75 3.24988L4.83 3.60988L5.793 15.0829C5.87 16.0199 6.653 16.7389 7.593 16.7359H18.502C19.399 16.7379 20.16 16.0779 20.287 15.1899L21.236 8.63188C21.342 7.89888 20.833 7.21888 20.101 7.11288C20.037 7.10388 5.164 7.09888 5.164 7.09888" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.125 10.7948H16.898" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15435 20.2025C7.45535 20.2025 7.69835 20.4465 7.69835 20.7465C7.69835 21.0475 7.45535 21.2915 7.15435 21.2915C6.85335 21.2915 6.61035 21.0475 6.61035 20.7465C6.61035 20.4465 6.85335 20.2025 7.15435 20.2025Z" fill="#130F26" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4346 20.2025C18.7356 20.2025 18.9796 20.4465 18.9796 20.7465C18.9796 21.0475 18.7356 21.2915 18.4346 21.2915C18.1336 21.2915 17.8906 21.0475 17.8906 20.7465C17.8906 20.4465 18.1336 20.2025 18.4346 20.2025Z" fill="#130F26" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Pane className='menu-text pl-4 font-medium leading-snug not-italic text-sm'>
                                    Quản lý dịch vụ
                                </Pane>
                            </Pane>
                        </Link>
                        <Link to='/user'>
                            <Pane className={`menu-item flex h-12 w-auto px-3 items-center cursor-pointer mt-2 rounded-md ${this.context.activeMenu === 'user' ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9846 21.606C11.9846 21.606 19.6566 19.283 19.6566 12.879C19.6566 6.474 19.9346 5.974 19.3196 5.358C18.7036 4.742 12.9906 2.75 11.9846 2.75C10.9786 2.75 5.26557 4.742 4.65057 5.358C4.03457 5.974 4.31257 6.474 4.31257 12.879C4.31257 19.283 11.9846 21.606 11.9846 21.606Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.38599 11.8746L11.278 13.7696L15.176 9.86963" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Pane className='menu-text pl-4 font-medium leading-snug not-italic text-sm'>
                                    Quản lý người dùng
                                </Pane>
                            </Pane>
                        </Link>
                    </Pane>
                </Pane>

            </Pane>
        )
    }
}

Sidebar.contextType = AppContext
export default Sidebar
