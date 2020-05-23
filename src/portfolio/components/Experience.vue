<template>
	<div>
		<!-- SECTION PROFESSIONNELLE -->
		<div class="sub-heading mt-4">
			<span>Expériences professionnelles</span>
			<span class="sub-heading-icon">
				<v-icon class="white--text">mdi-notebook</v-icon>
			</span>
		</div>
		<div class="resume-item" v-for="(experience, p) in Experiences" :key="p">
			<div class="resume-item-heading">
				<div class="title">{{experience.designation}}</div>
				<div class="resume-item-period">{{experience.date}}</div>
				<div class="resume-item-organization">{{experience.company}}</div>
				<div class="resume-item-description bb">{{experience.description}}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			Experiences: [
				{
					id: 0,
					designation: "YOUTUBE",
					company: "TUTO DEVELOPPEUR MAISON",
					description:
						"Création de tutoriels afin de consolider mon aisance orale et technique",
					date: "Octobre 2019"
				},

				{
					id: 1,
					designation: "STAGE",
					company: "FBO LA ROCHE SUR YON",
					description:
						"STAGE EN ENTREPRISE CONCEPTION D'UNE APPLICATION JAVAGOOGLE VISION OCR.Recherche et compréhension de la base de données relationnelles. Utilisation de spring boot pour effectuer les GET. Organisation autour du logiciel TRELLO et application de la méthode SCRUM AGILE tout au long du stage.",
					date: "Juillet 2019"
				},

				{
					id: 2,
					designation: "CROUPIER",
					company: "JOA CASINO DES PINS LES SABLES D'OLONNE",
					description: "Animer les tables de jeux",
					date: "2008 à 2018"
				},

				{
					id: 3,
					designation: "COMMIS AUX VIVRES",
					company: "MARINE NATIONALE FRANCE",
					description:
						"Gestionnaire de collectivité au sein de la Marine nationale.",
					date: "1997 à  2007"
				}
			]
		};
	}
};
</script>