import React from 'react'
import { Grid, Typography, styled, Box } from '@mui/material';
import { mainSkillItems } from './consts/SkillItems';

const Skill = () => {
  const Item = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1.5),
    borderRadius: 6,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));  
  
  return (
    <Grid 
      container
      justifyContent="center"
      rowspacing={3} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      
        {mainSkillItems.map((item, index) => (
          <Grid item key={item.id} xs={7.7} lg={7.7} sx={{ ml: {xs: 0, lg: 7}, mt: {xs: 2, lg: 2} }}>
            <Item sx={{backgroundColor: item.backgroundColor }}>
              <Box component="span" 
              sx=
              {{ 
                display: "flex", 
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                {item.icon} 
                
                <Typography 
                  variant="h4"
                  sx=
                  {{ 
                    color: item.textColor, 
                    fontSize: 14,
                    pl: 1,
                    fontWeight: "550"
                  }}
                > 
                  {item.text}
                </Typography>
              </Box>
              
              <Box component="span" 
                sx=
                {{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ 
                    color: "hsl(224, 30%, 27%)",
                    fontWeight: 700,
                    fontSize: 14,
                    pr: 0.5
                  }}
                >
                  {item.percentage}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ 
                    color: "rgb(172, 166, 170)",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  / 100
              </Typography>
              </Box>
            </Item>
          </Grid>
        ))}
    </Grid>
  )
}

export default Skill
