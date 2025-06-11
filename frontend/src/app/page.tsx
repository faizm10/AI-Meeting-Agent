import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Clock,
  Users,
} from "lucide-react";
import { NAME } from "@/lib/constants";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-yellow-300">
      {/* Header */}
      <header className="p-6 border-b-4 border-black bg-pink-400">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black text-black transform -rotate-1 bg-white px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {NAME}
          </div>
          <Link
            href="/summarizer"
            className="bg-green-400 border-3 border-black px-6 py-3 font-black text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200"
          >
            TRY IT FREE
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-black text-black leading-tight">
            TURN YOUR
            <span className="block bg-cyan-400 inline-block px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 mt-4">
              MEETINGS
            </span>
            <span className="block mt-4">INTO ACTION</span>
          </h1>

          <p className="text-2xl font-bold text-black max-w-3xl mx-auto bg-white p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Stop wasting time writing meeting notes. Our AI instantly summarizes
            your meetings and extracts action items so you can focus on what
            matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/summarizer"
              className="bg-orange-400 border-4 border-black px-8 py-4 text-xl font-black text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200 flex items-center gap-3"
            >
              START SUMMARIZING
              <ArrowRight className="w-6 h-6" />
            </Link>

            {/* <button className="bg-purple-400 border-4 border-black px-8 py-4 text-xl font-black text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200 flex items-center gap-3">
              <Play className="w-6 h-6" />
              WATCH DEMO
            </button> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-green-400 border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-black text-center mb-16 transform -rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            WHY MEETSUM ROCKS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-pink-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200">
              <Zap className="w-16 h-16 text-black mb-6" />
              <h3 className="text-2xl font-black text-black mb-4">
                LIGHTNING FAST
              </h3>
              <p className="text-lg font-bold text-black">
                Get your meeting summary in seconds, not hours. Upload your
                transcript and boom - instant results!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-cyan-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200">
              <Clock className="w-16 h-16 text-black mb-6" />
              <h3 className="text-2xl font-black text-black mb-4">SAVE TIME</h3>
              <p className="text-lg font-bold text-black">
                Stop spending hours writing meeting notes. Focus on executing
                instead of documenting.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-orange-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200">
              <Users className="w-16 h-16 text-black mb-6" />
              <h3 className="text-2xl font-black text-black mb-4">
                TEAM READY
              </h3>
              <p className="text-lg font-bold text-black">
                Share summaries instantly with your team. Everyone stays on the
                same page, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-black text-center mb-16 transform rotate-1 bg-purple-400 inline-block px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            HOW IT WORKS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-6">
              <div className="bg-green-400 border-4 border-black w-20 h-20 mx-auto flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl font-black text-black">1</span>
              </div>
              <h3 className="text-2xl font-black text-black">UPLOAD</h3>
              <p className="text-lg font-bold text-black bg-white p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Drop your meeting transcript or paste the text directly
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-6">
              <div className="bg-pink-400 border-4 border-black w-20 h-20 mx-auto flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl font-black text-black">2</span>
              </div>
              <h3 className="text-2xl font-black text-black">PROCESS</h3>
              <p className="text-lg font-bold text-black bg-white p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Our AI analyzes the content and extracts key insights
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-6">
              <div className="bg-cyan-400 border-4 border-black w-20 h-20 mx-auto flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-3xl font-black text-black">3</span>
              </div>
              <h3 className="text-2xl font-black text-black">GET RESULTS</h3>
              <p className="text-lg font-bold text-black bg-white p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Receive a clean summary with action items and deadlines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 px-6 bg-purple-400 border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-black text-center mb-16 transform -rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            WHAT PEOPLE SAY
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-black fill-current" />
                ))}
              </div>
              <p className="text-lg font-bold text-black mb-6">
                "This tool saved me 3 hours every week! No more scrambling to remember what was discussed in meetings."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-400 border-3 border-black"></div>
                <div>
                  <p className="font-black text-black">Sarah Chen</p>
                  <p className="font-bold text-black">Product Manager</p>
                </div>
              </div>
            </div>


            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-black fill-current" />
                ))}
              </div>
              <p className="text-lg font-bold text-black mb-6">
                "Finally, action items that don't get lost! My team actually follows through now."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-400 border-3 border-black"></div>
                <div>
                  <p className="font-black text-black">Mike Rodriguez</p>
                  <p className="font-bold text-black">Team Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing */}
      {/* <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-black mb-16 transform rotate-1 bg-green-400 inline-block px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            SIMPLE PRICING
          </h2>

          <div className="bg-cyan-400 border-4 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200">
            <h3 className="text-4xl font-black text-black mb-4">FREE FOREVER</h3>
            <p className="text-2xl font-bold text-black mb-8">
              Unlimited meeting summaries. No credit card required.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Unlimited transcripts",
                "AI-powered summaries",
                "Action item extraction",
                "Download & share",
                "No time limits"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-lg font-bold text-black">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/summarizer"
              className="bg-orange-400 border-4 border-black px-8 py-4 text-xl font-black text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-3"
            >
              START FOR FREE
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-pink-400 border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-black text-black">
            READY TO TRANSFORM YOUR MEETINGS?
          </h2>
          {/* <p className="text-xl font-bold text-black bg-white p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Join thousands of teams who've already revolutionized their meeting workflow
          </p> */}
          <Link
            href="/summarizer"
            className="bg-green-400 border-4 border-black px-12 py-6 text-2xl font-black text-black hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-4"
          >
            GET STARTED NOW
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t-4 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-black text-white mb-6 bg-yellow-300 text-black inline-block px-4 py-2 border-3 border-white">
            {NAME}
          </div>
          <p className="text-lg font-bold text-white">
            © 2025 MeetSum. Making meetings meaningful.
          </p>
        </div>
      </footer>
    </div>
  );
}
