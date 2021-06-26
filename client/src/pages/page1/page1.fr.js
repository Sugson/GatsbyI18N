import React from "react";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import AppBarSectionFr from '../commonSector/AppBarSection/AppBarSectionFr';
import TopLandingSectionFr from "../commonSector/TopLandingSection/TopLandingSectionFr";


export default function Page1Fr(props){
  return(
    <div style={{ width:"100%" }}>
      <AppBarSectionFr />
      <TopLandingSectionFr />
      <Container>
        <Typography
          component='h2'
          variant='h3'
          color='textSecondary'
          gutterButtom>
          Salut!!!
        </Typography>
        <br/>
        <Button
          onClick={()=>console.log('clicked')}
          type='submit'
          color='primary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon/>}
          >
          Soumettre
        </Button>
        Lorem îpsùm dolor sït âmet, vel lorem facilisî èx, sea êû împêtus elêctram. Essent êvërtïtur ëfficïendi nô séd, conceptâm rationibus concludaturque vix ea. Convenîre théôphrâstûs ius éu, alïi nàtum et êst, ëum eû qualisque èfficîendi. Eî nàm feùgiât vivendô, phaèdrum qùaérendum nec cu. Eî paulô dîçâm audîre vis. Ius aeterno alïqùïd nô, mollis pérïculis ïus èâ.

Ius in officîis menandri, erîpuit scrïptorem repudïandae sèà ïn, fastîdii àdipîsçî pèriculis éa vîs. Vidërer moléstïê assuéverît té est. Qùô éfficîêndi voluptàtïbus id, sït împetus vidisse cu. Salutândi accommodare hàs an, îd qùi dico gràècis. Péricùlis adolèscèns desêruîssê sea in, iisquè dêserûnt périculâ sèd èx. Usu id mêis nônumy, unum lûdûs ët eos. His qùidam cêtëros ad, èst te mélius vocibûs mediocritatem.

Elit nulla sît àn. Requè pèrsiùs adîpiscing has eà, mëlîus fâbûlas perfècto ëa çum, qûi at dicta âccûsam. Stêt ullàmcorper dëterruîssèt té sed. Nè mêl nonumy hàbemus vœluptaria, no meà qûàs constîtuàm theophrastùs. Nâm zril œfféndit probatûs an. Atomôrum disputando disséntîët çû çum.

Prô îûsto iudicâbît tè, ad meî alîï facèr iisqùe. Fâcîlis pêrcipitùr ea has, talé totà ea vim. Vîx an quis alîi. Dœming malôrum cômmunè pér èt, hàrum prinçipes cù ést. Pârtém malorum meà cû.

No mèa vœlûmus constïtùtô efficiantur. Vim hàbeo pondêrùm prodêssêt èx. Sît nœnumes singulîs ex, te copiosàe pérfécto cum. In vél tàtiôn luciliùs ïncorruptè, te has môvêt îisquè, amét rèçtéquë similïque vix ât. Id autëm labœrâmùs hîs, qùî ea tantàs prœprïàê.

Iudiço primis în pro. Ut stet delîcatà eos, ëruditi minimùm nam no. Quas ullùm quàeque eam nê, véniam mollis volûptuâ est èx. Alia quaerendum dissèntïùnt duo àn, qui ïn àssùm salutandi dèfînïtïôném. Vèritùs reférrentur no dùo, sit èrrëm dolôrês nolùissé id. Laorëet ërrœrïbùs çù pro, putànt moléstiàè ïd prï. Dicânt postulant përîculis êx nam, prô ut illùd utînâm disséntîet.

Eu est purto nostrœ perîçùla. Eum in suas dicâm fêugàit, et nêc dicunt animal sensibus. Cû has melïore pericûlis çonsëtetur, nîhil apèrïri nostrud pèr ex. Cùm êi adîpisçi posidônium, dolorëm qùàèstio ex vïx. Ex solet cotidiêqûè mei, omnîs summô iusto duo cu.

Vix gràécê quâerendum cu, no vel solum veniam éxerci. Ex vél suavitaté dissentiet. Nœ possé fabèllas per, putênt prôprïae çorrumpit vix né, his te equidem menandrï ïndoçtûm. Ei neç vide nôvum apeiriàn, pêr nè mûnëré cîvïbus honèstatîs, eî iûs rëbum modératiùs. Sumô âudîre quo ùt, ignota utàmùr vèl ut. Vis nô dicat iriuré ômnèsque.

Qûô ëï facilïs dêfinièbàs, elîtr vidérer an pro. Dûô né méntïtum elêçtram. Eù nam impétùs iuvarêt delènît, méi essè vîdîssë suavitàtè id, mèi labôré pertinax êi. Ut vîm etiam graéco, paulo graecè vûlpûtâté vèl at, ad delectus expètëndis mel. Vim ne némôre audire complectitûr, vix eï verï expétenda eùrîpidïs.

An vîm harum têmporîbus, prï dolôrês cômmunê mèdiocritâtêm cu, prô sênsibus iûdîcàbit éx. At singulis sçribèntûr vël, cômmuné rècusàbo èst éû. An nèc casè èpiçùri, ést ômnïs expetëndà cu. Et ïus prœmptà pœstulant, môdêrâtîus ëfficiëndî pro nê. Et lorem timêam lobortîs nêc, tè eam solum vùlputate. Nullà oratiœ intëllegàt ïus an.
      </Container>
    </div>
    
  );
}
