"use client"

import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, Link } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import Sidebar from './Sidebar';

const Navbar = () => {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width: 600px)');
    const theme = useTheme();
    const isAuthenticated = true;
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar className="h-[80px] flex justify-between md:ml-[240px] sm:ml-0 sm:flex-wrap">
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            style={{outline: "none"}}
                            onClick={() => {
                                router.push("/")
                            }}
                            className=" md:hidden"
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton
                        color="inherit"
                        className='ml-1'
                        onClick={() => {
                            
                        }}
                    >
                        { theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
                    </IconButton>
                    {!isMobile && "Search..."}
                    <div>
                        { !isAuthenticated ? (
                            <Button 
                            color="inherit" 
                            onClick={() => {router.push("/login")}}
                            >
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ): (
                            <Button 
                            color="inherit" 
                            component={Link}
                            onClick={() => {router.push("/profile/:id")}}
                            className=""
                            >
                                {!isMobile && <>My Movies</>}
                                <Avatar
                                    styles={{width: "32px", height: "32px"}}
                                    alt="Profile"
                                    src={""}
                                />
                            </Button>
                        )}
                    </div>
                    {isMobile && "Search..."}
                </Toolbar>
            </AppBar>
            <div>
                <nav className="">
                    {isMobile ? (
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            onClose={() => {}}
                            className=""
                            ModalProps={{ keepMounted: true}}
                        >
                            <Sidebar setMobileOpen={setMobileOpen}/>
                        </Drawer>
                    ): (
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={false}
                            onClose={() => {}}
                        >
                            side nav
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    )
}

export default Navbar