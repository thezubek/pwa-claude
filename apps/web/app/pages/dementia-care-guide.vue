<template>
  <NuxtLayout name="default">
    <div class="dementia-care-guide">
      <!-- Hero Section -->
      <section class="relative flex flex-col items-center justify-center rounded-xl min-h-[50vh] px-4 py-16 text-center bg-gradient-to-br from-blue-600 to-purple-700 mb-12">
        <div class="flex flex-col gap-4 max-w-3xl z-10">
          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-headline text-white">
            Dementia Care Guide
          </h1>
          <p class="font-body text-lg sm:text-xl font-normal leading-normal text-white">
            A comprehensive resource for families caring for loved ones with dementia
          </p>
        </div>
      </section>

      <div class="max-w-5xl mx-auto px-4 pb-20">
        <!-- Introduction -->
        <section class="mb-16">
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p class="text-lg text-gray-800 leading-relaxed">
              Caring for a family member with dementia can be challenging, but you're not alone. This guide provides
              practical strategies, emotional support, and resources to help you navigate this journey with compassion
              and confidence.
            </p>
          </div>
        </section>

        <!-- Understanding Dementia -->
        <section class="mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Understanding Dementia
          </h2>

          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 mb-4">
              Dementia is not a single disease but an umbrella term for a decline in mental ability severe enough to
              interfere with daily life. It affects memory, thinking, behavior, and the ability to perform everyday activities.
            </p>

            <div class="grid md:grid-cols-2 gap-6 my-8">
              <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Common Types</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span><strong>Alzheimer's Disease:</strong> Most common, 60-80% of cases</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span><strong>Vascular Dementia:</strong> Caused by reduced blood flow to the brain</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span><strong>Lewy Body Dementia:</strong> Protein deposits in nerve cells</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span><strong>Frontotemporal Dementia:</strong> Affects personality and behavior</span>
                  </li>
                </ul>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Common Symptoms</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-purple-600 mr-2">•</span>
                    <span>Memory loss affecting daily activities</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 mr-2">•</span>
                    <span>Difficulty with familiar tasks</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 mr-2">•</span>
                    <span>Problems with language and communication</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 mr-2">•</span>
                    <span>Disorientation to time and place</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 mr-2">•</span>
                    <span>Changes in mood and personality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Communication Strategies -->
        <section class="mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Effective Communication Strategies
          </h2>

          <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-6">
            <p class="text-gray-800 mb-6 text-lg">
              Communication changes are common with dementia. These strategies can help maintain meaningful connections:
            </p>

            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="font-display text-xl font-bold mb-4 text-green-800 flex items-center">
                  <span class="text-2xl mr-2">✓</span> Do's
                </h3>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">→</span>
                    <span>Approach from the front and make eye contact</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">→</span>
                    <span>Use simple words and short sentences</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">→</span>
                    <span>Speak slowly and clearly with a calm, reassuring tone</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">→</span>
                    <span>Allow plenty of time for responses</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">→</span>
                    <span>Use names instead of pronouns</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">→</span>
                    <span>Break down tasks into simple steps</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">→</span>
                    <span>Use gestures and visual cues</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="font-display text-xl font-bold mb-4 text-red-800 flex items-center">
                  <span class="text-2xl mr-2">✗</span> Don'ts
                </h3>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">→</span>
                    <span>Don't argue or try to convince them they're wrong</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">→</span>
                    <span>Avoid asking "Do you remember...?"</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">→</span>
                    <span>Don't talk about them as if they're not there</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">→</span>
                    <span>Avoid complex questions or choices</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">→</span>
                    <span>Don't rush or pressure them to respond</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">→</span>
                    <span>Avoid negative criticism or correction</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">→</span>
                    <span>Don't use baby talk or condescending language</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Daily Care Tips -->
        <section class="mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Daily Care and Routine
          </h2>

          <p class="text-gray-700 mb-6 text-lg">
            Establishing a consistent routine can help reduce confusion and anxiety for your loved one:
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div class="text-4xl mb-4">🌅</div>
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Morning Routine</h3>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Wake at consistent time</li>
                <li>• Simple breakfast choices</li>
                <li>• Assistance with grooming</li>
                <li>• Lay out clothes the night before</li>
                <li>• Allow extra time for tasks</li>
              </ul>
            </div>

            <div class="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div class="text-4xl mb-4">☀️</div>
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Daytime Activities</h3>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Light physical exercise</li>
                <li>• Engaging activities they enjoy</li>
                <li>• Social interaction</li>
                <li>• Familiar music or hobbies</li>
                <li>• Regular meal times</li>
              </ul>
            </div>

            <div class="bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div class="text-4xl mb-4">🌙</div>
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Evening Routine</h3>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Calm, quiet environment</li>
                <li>• Limit caffeine and sugar</li>
                <li>• Reduce stimulation before bed</li>
                <li>• Consistent bedtime</li>
                <li>• Nightlight for safety</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h3 class="font-display text-xl font-bold mb-3 text-gray-900 flex items-center">
              <span class="text-2xl mr-2">⚠️</span> Safety Considerations
            </h3>
            <div class="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul class="space-y-2">
                <li>• Remove tripping hazards and clutter</li>
                <li>• Install grab bars in bathroom</li>
                <li>• Ensure good lighting throughout home</li>
                <li>• Secure medications and chemicals</li>
              </ul>
              <ul class="space-y-2">
                <li>• Consider door locks/alarms for wandering</li>
                <li>• Keep emergency numbers visible</li>
                <li>• Remove car keys if no longer safe to drive</li>
                <li>• Monitor cooking and appliances</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Managing Challenging Behaviors -->
        <section class="mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Managing Challenging Behaviors
          </h2>

          <p class="text-gray-700 mb-6 text-lg">
            Behavioral changes are often a way for people with dementia to communicate needs or feelings:
          </p>

          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 bg-white rounded-r-lg p-6 shadow-sm">
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Agitation and Restlessness</h3>
              <p class="text-gray-700 mb-3"><strong>Possible causes:</strong> Pain, overstimulation, boredom, need for bathroom</p>
              <p class="text-gray-700"><strong>Strategies:</strong> Identify triggers, reduce noise/crowds, provide calming activities, maintain routine, check for physical discomfort</p>
            </div>

            <div class="border-l-4 border-green-500 bg-white rounded-r-lg p-6 shadow-sm">
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Wandering</h3>
              <p class="text-gray-700 mb-3"><strong>Possible causes:</strong> Looking for something familiar, restlessness, past routine habits</p>
              <p class="text-gray-700"><strong>Strategies:</strong> Ensure ID bracelet, secure home, redirect attention, provide safe walking space, address underlying needs</p>
            </div>

            <div class="border-l-4 border-purple-500 bg-white rounded-r-lg p-6 shadow-sm">
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Sundowning (Late-Day Confusion)</h3>
              <p class="text-gray-700 mb-3"><strong>Possible causes:</strong> Fatigue, low lighting, disrupted body clock</p>
              <p class="text-gray-700"><strong>Strategies:</strong> Maintain daytime activity, limit naps, increase lighting before dark, avoid evening stimulants, establish calming routine</p>
            </div>

            <div class="border-l-4 border-red-500 bg-white rounded-r-lg p-6 shadow-sm">
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Repetitive Questions or Actions</h3>
              <p class="text-gray-700 mb-3"><strong>Possible causes:</strong> Memory loss, anxiety, seeking reassurance, boredom</p>
              <p class="text-gray-700"><strong>Strategies:</strong> Answer patiently each time, look for emotion behind question, provide reassurance, use notes/reminders, distract with activity</p>
            </div>

            <div class="border-l-4 border-orange-500 bg-white rounded-r-lg p-6 shadow-sm">
              <h3 class="font-display text-xl font-bold mb-3 text-gray-900">Suspicion or Accusations</h3>
              <p class="text-gray-700 mb-3"><strong>Possible causes:</strong> Memory loss leading to misplaced items, confusion about reality</p>
              <p class="text-gray-700"><strong>Strategies:</strong> Don't argue or take it personally, help look for items, keep spares of frequently lost items, create routine storage spots</p>
            </div>
          </div>
        </section>

        <!-- Self-Care for Caregivers -->
        <section class="mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Self-Care for Caregivers
          </h2>

          <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
            <p class="text-gray-800 mb-6 text-lg font-medium">
              Taking care of yourself is not selfish—it's essential. Caregiver burnout is real and can affect your health
              and ability to provide care.
            </p>

            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="font-display text-xl font-bold mb-4 text-gray-900">Signs of Caregiver Burnout</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">⚠</span>
                    <span>Feeling overwhelmed or constantly worried</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">⚠</span>
                    <span>Feeling tired often or sleeping problems</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">⚠</span>
                    <span>Withdrawing from friends and family</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">⚠</span>
                    <span>Loss of interest in activities you once enjoyed</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">⚠</span>
                    <span>Irritability or impatience</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">⚠</span>
                    <span>Frequent headaches or physical problems</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="font-display text-xl font-bold mb-4 text-gray-900">Self-Care Strategies</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Accept help from family and friends</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Join a support group for caregivers</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Take regular breaks—respite care is important</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Maintain your own health appointments</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Exercise regularly, even just short walks</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Set realistic goals and expectations</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Stay connected with friends</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-white rounded-lg p-6 mt-6">
              <p class="text-gray-800 font-medium italic">
                "You cannot pour from an empty cup. Taking care of yourself is giving yourself permission to be the
                best caregiver you can be."
              </p>
            </div>
          </div>
        </section>

        <!-- Resources and Support -->
        <section class="mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Resources and Support
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border-2 border-blue-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 class="font-display text-xl font-bold mb-4 text-blue-900">📚 Educational Resources</h3>
              <ul class="space-y-3 text-gray-700">
                <li>
                  <strong class="text-gray-900">Alzheimer's Association</strong>
                  <p class="text-sm">24/7 Helpline: 1-800-272-3900</p>
                  <p class="text-sm">Website: alz.org</p>
                </li>
                <li>
                  <strong class="text-gray-900">National Institute on Aging</strong>
                  <p class="text-sm">Comprehensive dementia information</p>
                  <p class="text-sm">Website: nia.nih.gov/alzheimers</p>
                </li>
              </ul>
            </div>

            <div class="bg-white border-2 border-green-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 class="font-display text-xl font-bold mb-4 text-green-900">👥 Support Groups</h3>
              <ul class="space-y-3 text-gray-700">
                <li>
                  <strong class="text-gray-900">Local Support Groups</strong>
                  <p class="text-sm">Check with Alzheimer's Association for groups in your area</p>
                </li>
                <li>
                  <strong class="text-gray-900">Online Communities</strong>
                  <p class="text-sm">ALZConnected, Dementia Talking Point, and others</p>
                </li>
              </ul>
            </div>

            <div class="bg-white border-2 border-purple-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 class="font-display text-xl font-bold mb-4 text-purple-900">🏥 Professional Services</h3>
              <ul class="space-y-3 text-gray-700">
                <li>
                  <strong class="text-gray-900">Adult Day Programs</strong>
                  <p class="text-sm">Supervised activities and socialization</p>
                </li>
                <li>
                  <strong class="text-gray-900">Respite Care</strong>
                  <p class="text-sm">Temporary care to give caregivers a break</p>
                </li>
                <li>
                  <strong class="text-gray-900">Home Health Aides</strong>
                  <p class="text-sm">Professional in-home assistance</p>
                </li>
              </ul>
            </div>

            <div class="bg-white border-2 border-orange-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 class="font-display text-xl font-bold mb-4 text-orange-900">⚖️ Legal and Financial</h3>
              <ul class="space-y-3 text-gray-700">
                <li>
                  <strong class="text-gray-900">Elder Law Attorneys</strong>
                  <p class="text-sm">Help with advance directives, power of attorney</p>
                </li>
                <li>
                  <strong class="text-gray-900">Financial Planners</strong>
                  <p class="text-sm">Plan for long-term care costs</p>
                </li>
                <li>
                  <strong class="text-gray-900">Medicare/Medicaid</strong>
                  <p class="text-sm">Understand coverage options</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Key Takeaways -->
        <section class="mb-16">
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 class="font-display text-3xl font-bold mb-6">Key Takeaways</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-2xl mr-3">1️⃣</span>
                  <span>Every person with dementia is unique—what works for one may not work for another</span>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-3">2️⃣</span>
                  <span>Focus on quality of life and moments of connection</span>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-3">3️⃣</span>
                  <span>Routines and familiar environments provide comfort</span>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-3">4️⃣</span>
                  <span>Communication is more than words—tone and body language matter</span>
                </li>
              </ul>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-2xl mr-3">5️⃣</span>
                  <span>Challenging behaviors are often communication of unmet needs</span>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-3">6️⃣</span>
                  <span>Taking care of yourself is essential to provide good care</span>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-3">7️⃣</span>
                  <span>You don't have to do this alone—seek support</span>
                </li>
                <li class="flex items-start">
                  <span class="text-2xl mr-3">8️⃣</span>
                  <span>Be patient with yourself and your loved one</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Final Note -->
        <section class="text-center">
          <div class="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
            <p class="text-xl text-gray-800 font-medium mb-4">
              Remember: You're doing your best in a difficult situation.
            </p>
            <p class="text-gray-700">
              Caring for someone with dementia is one of the most challenging roles you can take on.
              Give yourself grace, celebrate small victories, and don't hesitate to ask for help when you need it.
            </p>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  pageType: 'static',
});

const { t } = useI18n();
const { setPageMeta } = usePageMeta();
const { getRobots, setRobotForStaticPage } = useRobots();

const icon = 'heart';
setPageMeta('Dementia Care Guide', icon);

await getRobots();
setRobotForStaticPage('DementiaCareGuide');
</script>

<style scoped>
.dementia-care-guide {
  @apply bg-gray-50;
}

.prose {
  @apply text-gray-700;
}
</style>
