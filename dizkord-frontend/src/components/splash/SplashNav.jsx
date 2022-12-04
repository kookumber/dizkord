import React from "react";
import { styled } from "@mui/system";
import { Typography, 
         AppBar, 
         Button,
         Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const LinkTag = styled('a')({
    color: 'white',
    margin: '10px',
    padding: '10px',
    fontWeight: 800,
    textDecoration: 'none',
    fontSize: '16px'
})

const NavContainer = styled('div')({
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '1100px',
    maxWidth: '1400px'
})

const SplashNav = ({ userDetails }) => {

    const pages = [
        { name: 'Github', link: 'https://github.com/kookumber'},
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/quang-tran-2926a78b/' },
        { name: 'Portfolio', link: 'https://quang-tran.netlify.app/' },
        { name: 'Wellfound', link: 'https://angel.co/u/quang-tran-40' },
        { name: 'TripleByte', link: 'https://triplebyte.com/tb/quang-tran-rvvoobm' }
    ]

    const navigate = useNavigate()

    const handleRedirect = () => {
        return userDetails ? navigate('/conversations/@me') : navigate('/login')
    }
    
    const handleRefresh = () => {
        navigate('/')
    }

    return (
        <AppBar
            sx={{
                width: '100%',
                height: '80px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                position: 'absolute'
            }}
        >
            <NavContainer>
            <Box
                onClick={handleRefresh}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    width: '150px'
                }}
            >
                <SportsEsportsIcon style={{ fontSize: '40px' }} />
                <Typography 
                    variant="h6"
                    sx={{
                        // fontWeight: 'bold',
                        marginLeft: '5px',
                        fontFamily: 'Rammetto One'
                    }}
                >
                    Dizkord
                </Typography>
            </Box>
            <Box>
                {
                    pages.map((page, idx) => {
                        return (
                            <LinkTag key={idx} href={page.link} target="_blank"> 
                                {page.name}
                            </LinkTag>
                        )
                    })
                }
            </Box>
            <Box sx={{ width: '150px', display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={handleRedirect}
                    sx={{
                        height: '38px',
                        minWidth: '64px',
                        color: 'black',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        borderRadius: '18px',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#5865f2',
                            backgroundColor: 'white',
                            boxShadow: '7px 7px 7px  rgba(0, 0, 0, 0.1)'
                        }
                    }}
                >
                    { userDetails ? 'Open Dizkord' : 'Login' }
                </Button>
            </Box>
            </NavContainer>
        </AppBar>
    )
}

export default SplashNav