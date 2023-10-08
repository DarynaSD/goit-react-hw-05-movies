import { styled } from 'styled-components';

//header
export const HederWrap = styled('div')({
    width: ' 100%',
    backgroundColor: '#071E22',
    padding: '40px'
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
    width: ' 100%',
    padding: '40px',
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
export const Searchbar = styled('div')({
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
})

// export const SearchForm  = styled('form')({
// textAlign: 'center',
// })
    

 
