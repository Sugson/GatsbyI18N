import React from "react";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import AppBarSectionEn from '../commonSector/AppBarSection/AppBarSectionEn';
import TopLandingSectionEn from "../commonSector/TopLandingSection/TopLandingSectionEN";


export default function LandingPageEn(props){
  return(
    <div style={{ width:"100%" }}>
      <AppBarSectionEn />
      <TopLandingSectionEn />
      <Container>
        <Typography
          component='h2'
          variant='h3'
          color='textSecondary'
          gutterButtom>
          Hello!!!
        </Typography>
        <br/>
        <Button
          onClick={()=>console.log('clicked')}
          type='submit'
          color='primary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon/>}
          >
          submit
        </Button>
        Lorem ipsum dolor sit amet, ad duo platonem repudiare, sea ei minimum nominati. Modus antiopam consectetuer pri ei, ad sumo vide duis sea. Etiam tamquam disputationi cu eum, nihil fierent sea ei. Pro ex saepe nusquam, ad agam invenire reformidans nam. Duo vide atqui commune eu, ei est fuisset verterem adipisci. Alia iuvaret vel cu, id quo admodum expetenda democritum. Soleat signiferumque est et, et tation essent eum.

Omnes partem recusabo ea eos. Adhuc delenit efficiendi ius te, eu inani dictas comprehensam cum. Duo ei vidit essent. Epicuri disputationi ea sed. Mei legere vocent ponderum ex, et per erat fabulas. Tation molestie liberavisse vix id, nisl eros an per, mel mollis ponderum ei.

Quaestio definiebas eu sed, has facilis scaevola luptatum cu. Sonet equidem lobortis sit te. Nec ei dico aeque. Esse iudicabit ex pro. Vel legere aperiam vivendo ut, eu per dicat nonumy. Ut vitae partem deterruisset nec.

Duo in sonet dicam tractatos, per velit aliquid honestatis ea, labitur vulputate ea usu. Ullum albucius quaestio eum no, id alia tincidunt usu. Has dicam appareat reprehendunt at, vel te diceret vituperata necessitatibus. Eos ludus dissentias id, mea no timeam accusam, ea nam integre salutatus. Vim ut case civibus. Et vel ferri graecis minimum, no veri quaeque iracundia ius. Qui an accumsan facilisis pertinacia, id dicat homero aliquid qui.

Omittam adipisci in est, meliore maiorum antiopam ne cum, te appetere perfecto mei. Sit homero discere id, utamur dolorem cum no. At eam natum congue reprehendunt, no his wisi assum insolens. In est inciderint deterruisset, putent signiferumque mel ex. Te minim tation pertinax sed.

Ad qui quodsi inermis mandamus. Commodo adolescens mediocritatem duo ne. Vix errem aperiam ad. Te vis nobis everti tibique. Vivendo petentium gubergren cu has.

In sint quas eam, timeam civibus suscipit eu ius, pri at tation deleniti salutandi. Sea modo clita hendrerit id, mentitum complectitur cum ut. Sea voluptua suavitate disputando no, sed idque dolorum et. Sed nominavi oportere id. Ei nibh audiam mel. Mea enim consetetur cu, at eos percipitur omittantur, amet fuisset omittam vix in.

Nam tollit lobortis et. Vel ne sensibus disputationi. Et duo reque erant tractatos, eam cu volumus fabellas lobortis. Id usu pertinax salutatus. No sed dolor nostro, sint vidisse nam et, oratio ubique viderer eos at. Dictas corpora pri ex, eam at scribentur contentiones, ut mea audire probatus.

No verear antiopam vel, errem alienum torquatos ei sit. In magna euismod petentium eum. Dolor congue legimus in vis. Novum neglegentur ei vel, cu mel ipsum ceteros detracto, in qui iusto scaevola.

Ut eum novum verear dissentias, nam delectus sententiae mediocritatem et. Aeque utroque inimicus sit ei. Quem movet epicurei ius ut. Te cum hinc dictas suscipit, cum an eripuit adipisci, erat iracundia est ei. Duo at electram convenire, ne mea solet mucius scripta, in has utroque epicuri reprimique. Labores repudiare comprehensam usu ei, cum quot definitiones id, autem erant quaeque cu eos.
      </Container>
    </div>
    
  );
}
