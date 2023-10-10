import { styled } from 'styled-components';

//header
export const HederWrap = styled('div')({
    width: ' 100%',
    backgroundColor: '#071E22',
    padding: '40px',
    
})

export const NavLinkWrap = styled('div')({
    margin: '0 auto',
    maxWidth: 400,
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
})

export const NavLinkStyled = styled('NavLink')({
padding: 15,
})

//Pages
export const Home = styled('div')({
    width: ' 100%',
    padding: '40px',
})
 export const Movies = styled('div')({
    width: ' 100%',
    padding: '40px',
 })

 export const Det = styled('div')({
    padding: '40px',
    maxWidth: 1200,
    margin: '0 auto',
 })

//list
 export const List = styled('ul')({
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: 16,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',

    scrollBehavior: 'smooth',
 })

export const Item = styled('li')({
    position: 'relative',
    borderRadius: 8,
    boxShadow: ' 0px 15px 30px 0px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
})

export const ItemTextWrap = styled('div')({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(transparent, #071E22)',
    })

export const ItemText = styled('p')({
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 3,
    padding: 25,

    fontSize: 25,
    fontWeight: 'bold',
})

//form
export const FormWrap = styled('div')({
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',

    maxWidth: 350,
    margin: '0 auto 40px',
})
    
export const Input = styled('input')({
    padding: 10,
    border: 'none',
    borderRadius: 10,
    boxShadow: '0px 15px 30px 0px rgba(0, 0, 0, 0.0)',
    transition: 'boxShadow, linear, 250ms',

    '&:is(:hover, :focus)': {
        boxShadow: '0px 15px 30px 0px rgba(0, 0, 0, 0.2)',
    },
})

//buttons
export const Button = styled('button')({
    padding: '10px 20px',
    border: 'none',
    borderRadius: 10,
    boxShadow: '0px 15px 30px 0px rgba(0, 0, 0, 0.0)',
    transition: 'boxShadow, linear, 250ms',
    cursor: 'pointer',

    '&:is(:hover, :focus)': {
        boxShadow: '0px 15px 30px 0px rgba(0, 0, 0, 0.2)',
    },
})

//single movie

export const Wrapper = styled('div')({
    maxWidth: 600,
    
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
})

export const InfoWrapper = styled('div')({
    display: 'flex',
    gap: 40,
    margin: '40px 0 15px',
})

export const Section = styled('section')({
    padding: 40,
})
 
export const SingleImg = styled('img')({
    width: 400,
    borderRadius: 15,
})

//cast + reviews
export const LinkWrap = styled('div')({
    margin: 0,
    maxWidth: 400,
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 20,
    alignItems: 'flex-start',
    justifyContent: 'left',
})

 export const CastUl = styled('ul')({
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridGap: 16,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',

    scrollBehavior: 'smooth',
 })

export const CastItem = styled('li')({
    borderRadius: 8,
    boxShadow: ' 0px 15px 30px 0px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
})

export const ActorWrap = styled('div')({
    padding: 15,
})

export const RewItem = styled('li')({
marginBottom: 25
})