import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: {
    main: '#f44336',
  },
  secondary: {
    main: '#3f51b5',
  },
};


export default function Home({ characters }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ThemeProvider theme={theme}>
      <List>
        {characters.results.map((character) => (
          <>
            <ListItem alignItems="flex-start" key={character.id}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={character.image} />
              </ListItemAvatar>
              <ListItemText
                primary={character.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      {character.species}
                    </Typography>
                    {` — ${character.status}`}
                  </>
                }
              />
            </ListItem>
          </>
        ))}


      </List>

    </ThemeProvider>

  );
}
// return array con  los personajes
type Characters = {
  info: object
  results: Array<{
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: object
    location: object
    image: string
    episode: Array<string>
    url: string
    created: string
  }>
}

export const getServerSideProps = (async () => {

  const res = await fetch('https://rickandmortyapi.com/api/character')
  const characters: Characters = await res.json()

  return { props: { characters } }
}) satisfies GetServerSideProps<{ characters: Characters }>

