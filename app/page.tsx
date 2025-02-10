'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { Project } from '@/types'
import PortfolioItem from '@/components/PortfolioItem'

const sampleProjects: Project[] = [
    {
        id: '1',
        title: 'My Cool Website',
        description: 'A website I built for a client',
        category: 'web',
        images: ['/projects/website1.jpg'],  // This path points to public/projects/website1.jpg
        technologies: ['React', 'CSS', 'JavaScript'],
        link: 'https://myproject.com'
    },
    // Copy and paste this structure for each project
    // Just change the values
]

export default function Home() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen">
                <section className="h-screen relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-dark"
                    />

                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-6xl md:text-8xl font-bold mb-6"
                        >
                            Creative Developer
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-xl md:text-2xl max-w-2xl"
                        >
                            Web Development • App Development • Design • Animation
                        </motion.p>
                    </div>
                </section>

                <section id="work" className="py-20 px-4 bg-dark">
                    <div className="container mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-12 text-center"
                        >
                            Featured Work
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sampleProjects.map((project, index) => (
                                <PortfolioItem
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}