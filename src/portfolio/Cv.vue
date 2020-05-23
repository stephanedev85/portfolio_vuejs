/* eslint-disable no-mixed-spaces-and-tabs */
<template>
	<div>
		<v-card tile class="md-1">
			<v-card-text>
				<v-row>
					<v-col col="12">
						<span class="heading">Curriculum Vitae</span>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="8">
						<expComponent />
						<educComponent />
						<InteretIformatiqueComponent />
						<LoisirComponent />
						<!-- ADRESSE -->
						<v-card class="mt-8">
							<v-img class="black--text" height="200px" v-bind:src="codeImage">
								<v-container fill-height fluid>
									<v-layout fill-height>
										<v-flex xs12 align-end flexbox>
											<span class="headline">Adresse</span>
										</v-flex>
									</v-layout>
								</v-container>
							</v-img>
							<v-card-title>
								<div>
									<span>28, La renaudière</span>
									<br />
									<span>85150 Sainte flaive des loups</span>
									<br />
									<span>Vendée</span>
								</div>
							</v-card-title>
						</v-card>
					</v-col>
					<v-col cols="12" md="4">
						<!-- LANGUES -->
						<div class="sub-heading mt-4">
							<span>Langue</span>
							<span class="sub-heading-icon">
								<v-icon color="#fff">mdi-speaker</v-icon>
							</span>
						</div>
						<div class="skill-wrapper">
							<div class="skill-item" v-for="(item, index) in langues" :key="index+200">
								<div class="skill-name mt-8">{{item.name}}</div>
								<v-progress-linear :value="item.percent_completed" width="8"></v-progress-linear>
							</div>
						</div>
						<!-- COMPETENCES -->
						<div v-for="(group, i) in competencesGroup" :key="i">
							<div class="sub-heading mt-8">
								<span>{{group.name}}</span>
								<span class="sub-heading-icon">
									<v-icon color="#fff">{{group.icon}}</v-icon>
								</span>
							</div>
							<div class="skill-wrapper" v-if="group.Competences">
								<div class="skill-item" v-for="(Competence, i) in group.Competences" :key="i+300">
									<div class="skill-name mt-8">{{Competence.name}}</div>
									<v-progress-linear :value="Competence.percent_completed" width="8">
									</v-progress-linear>
								</div>
							</div>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</div>
</template>
<script>
	import expComponent from './components/Experience'
	import educComponent from './components/Education'
	import InteretIformatiqueComponent from './components/InteretInformatique'
	import LoisirComponent from './components/Loisir'
	export default {
		components: {
			expComponent,
			educComponent,
			InteretIformatiqueComponent,
			LoisirComponent
		},
		data() {
			return {
				codeImage: require("../assets/pccodevue.jpg"),


				langues: [{
						id: 16,
						name: "Français",
						percent_completed: 90
					},
					{
						id: 16,
						name: "Anglais",
						percent_completed: 55
					}
				],
				competencesGroup: [{
						id: 17,
						name: "Langages",
						icon: "mdi-developer-board",
						Competences: [{
								id: 18,
								name: "HTML",
								percent_completed: 60
							},
							{
								id: 19,
								name: "CSS",
								percent_completed: 55
							},
							{
								id: 20,
								name: "JAVASCRIPT",
								percent_completed: 40
							},
							{
								id: 21,
								name: "HANDLEBARS",
								percent_completed: 30
							}
						]
					},
					{
						id: 22,
						name: "Frameworks",
						icon: "mdi-electron-framework",
						Competences: [{
								id: 23,
								name: "WORDPRESS",
								percent_completed: 55
							},
							{
								id: 24,
								name: "BOOTSTRAP",
								percent_completed: 55
							},
							{
								id: 25,
								name: "EXPRESS",
								percent_completed: 60
							},
							{
								id: 26,
								name: "VUEJS",
								percent_completed: 30
							}
						]
					},
					{
						id: 27,
						name: "BACK-END",
						icon: "mdi-server",
						Competences: [{
								id: 28,
								name: "NODEJS",
								percent_completed: 40
							},
							{
								id: 29,
								name: "MONGODB",
								percent_completed: 30
							},
							{
								id: 30,
								name: "SERVER OVH",
								percent_completed: 60
							},
							{
								id: 31,
								name: "SERVEUR LINUX",
								percent_completed: 55
							}
						]
					},
					{
						id: 32,
						name: "OS",
						icon: "mdi-disc",
						Competences: [{
								id: 33,
								name: "LINUX",
								percent_completed: 40
							},
							{
								id: 34,
								name: "WINDOWS",
								percent_completed: 50
							}
						]
					},
					{
						id: 35,
						name: "LOGICIELS",
						icon: "mdi-loading",
						Competences: [{
								id: 36,
								name: "VISUAL CODE STUDIO",
								percent_completed: 55
							},
							{
								id: 37,
								name: "GITHUB",
								percent_completed: 45
							},
							{
								id: 38,
								name: "TRELLO",
								percent_completed: 40
							},
							{
								id: 39,
								name: "WORDPRESS",
								percent_completed: 40
							}
						]
					},
					{
						id: 40,
						name: "RESEAU",
						icon: "mdi-link",
						Competences: [{
								id: 41,
								name: "LAMP",
								percent_completed: 70
							},
							{
								id: 42,
								name: "XAMP",
								percent_completed: 70
							},
							{
								id: 43,
								name: "OVH",
								percent_completed: 50
							}
						]
					},
					{
						id: 44,
						name: "MATERIEL",
						icon: "mdi-material-design",
						Competences: [{
								id: 45,
								name: "MONTAGE PC HARDWARE",
								percent_completed: 80
							},
							{
								id: 46,
								name: "INSTALLATION SOFTWARE",
								percent_completed: 80
							}
						]
					}
				]
			};
		}
	};
</script>

<style>
	.sub-heading {
		background-color: #313131;
		color: #fff;
		padding: 5px;
		position: relative;
	}

	.sub-heading-icon {
		position: absolute;
		right: 5px;
	}

	.resume-item-heading {
		position: relative;
	}

	.resume-item-period {
		position: absolute;
		right: 0;
		top: 5px;
		border-bottom: 1px inset #313131;
	}

	.resume-item-description {
		border-left: 1px solid #3c3c3c;
		padding: 10px;
	}

	.bb {
		border-bottom: 1px inset #313131;
	}
</style>