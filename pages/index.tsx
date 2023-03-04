import BaltimoreDemographics from '../components/BaltimoreDemographics'
import MarylandHousing from '../components/MarylandHousing'
import MarylandPopulationGrowth from '../components/MarylandPopulationGrowth'
import MarylandVoterID from '../components/MarylandVoterID'

export default () => (
	<div>
		<div className="max-w-3xl mx-auto px-4 sm:px-0 mb-20">
			<h1 className="text-5xl font-bold pt-12">Data Visualizations</h1>
			<p className="text-gray-500 text-left sm:text-left font-medium pb-4">
				A collection of data visualizations that tell visual stories of
				Baltimore that I have created using d3.js.
			</p>
			<h1 className="text-3xl text-left font-bold mt-10 mb-4">
				Race distribution in Baltimore City
			</h1>
			<BaltimoreDemographics />

			<h1 className="text-3xl text-left font-bold mt-20 mb-4">
				Which counties are growing in Maryland?
			</h1>
			<MarylandPopulationGrowth />

			<h1 className="text-3xl text-left font-bold mt-20 mb-2">
				Where are houses in Maryland being built?
			</h1>
			<MarylandHousing />

			<p className="mt-4 text-lg">
				Before the Great Recession, houses were being built at a historically
				high rate. Between 2000 and 2005, around 28,000 houses were bieng built
				every year. Once the housing market collapsed, housing rates in almost
				every part of Maryland never recovered; after the reccesion, never has
				there been a year that over 20,000 houses have been built in Maryland.
			</p>

			<p className="mt-4 text-lg">
				This is not the case everywhere, however. In Fredrick County, one of
				Marylands most rapidy growing counties, housing has been booming, with
				over 2,500 houses built in 2020 compared to under 700 houses bieng built
				at the peak of the recession. Not all fast growing counties are seeing
				new homes, although. Charles county, which grew almost 10% from
				2010-2018 saw mostly stagnant housing growth.
			</p>

			<h1 className="text-3xl text-left font-bold mt-20 mb-2">
				Who Would Voter ID Laws Impact the Most?
			</h1>
			<MarylandVoterID />

			<p className="mt-4 text-lg">
				In Missouri, voters now must bring a government issued photo id to the
				polls, or risk having their provisional ballot nullified if their
				signature does not match their signature on their voter registration
				form. Proposals have been made across the United States to implement
				laws such as that of Missouri, and whats clear in Maryland is that Voter
				ID laws would serve to marginalize the African American community.
			</p>

			<p className="mt-4 text-lg">
				In Baltimore City, home to over 20% of Maryland&apos;s African American
				population, a staggering 31% of 18+ residents do not have a drivers
				license. Now not all of these residents are citizens, and are eligible
				to vote, but still a significant portion of Marylands largest city would
				immediately find a large barrier to casting their vote if Voter ID laws
				were put in place.
			</p>

			<p className="mt-4 text-lg">
				Other counties with a high African American population such as Prince
				George&apos;s County and Somerset County would also be hard hit by a
				Voter ID law. With cases of voter fraud nearly non-existent in Maryland,
				politicians should be wary before implementing a solution to a problem
				that does not exist, and only serves to make it harder to participate in
				our democratic proccess.
			</p>

			<div className="h-20" />
		</div>
	</div>
)
