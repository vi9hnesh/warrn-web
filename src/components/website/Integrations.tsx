"use client";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import Link from "next/link";

export const IntegrationsSection = () => {
    return (
        <section className="max-w-[85%] mx-auto dark:bg-muted/25 bg-zinc-50 py-22 m-22 mt-28 border-none rounded-3xl">
            <div className="max-w-[85%] mx-auto px-6">
                <Link
                    href={"https://docs.warrn.io/integrations"}
                    target="_blank"
                    className={`
                        group relative flex flex-col gap-4 h-full rounded-xl p-5
                        bg-gradient-to-b from-neutral-50/60 via-neutral-50/40 to-neutral-50/30 
                        dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-900/30
                        border border-neutral-200/60 dark:border-neutral-800/60
                        before:absolute before:inset-0 before:rounded-xl
                        before:bg-gradient-to-b before:from-white/10 before:via-white/20 before:to-transparent 
                        dark:before:from-black/10 dark:before:via-black/20 dark:before:to-transparent
                        before:opacity-100 before:transition-opacity before:duration-500
                        after:absolute after:inset-0 after:rounded-xl after:bg-neutral-50/70 dark:after:bg-neutral-900/70 after:z-[-1]
                        backdrop-blur-[4px]
                        shadow-[0_4px_20px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]
                        
                        transition-all duration-500 ease-out 
                    `}
                    tabIndex={0}
                    aria-label={`Integrations Section - Integrations with your favorite tools and services`}
                >
            <div
            className="relative z-10 flex flex-col gap-3 h-full"
            style={{ transform: "translateZ(20px)" }}
            >
            <div className="space-y-2 flex-1 flex flex-col">
                <div className="flex flex-col items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
                        Integrates seamlessly with the tools that you love
                    </h3>   
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight">
                        Get the most out of your alerts and incidents by integrating your favorite tools and services.
                    </p>
                </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8 "
                                    src="/logos/slack.svg"
                                    alt="Slack logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Slack
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8 invert dark:invert-0"
                                    src="/logos/github.svg"
                                    alt="Github logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Github
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8"
                                    src="/logos/cloudwatch.svg"
                                    alt="AWS CloudWatch logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                AWS CloudWatch
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8"
                                    src="/logos/jira.svg"
                                    alt="Jira logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Jira
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8 invert dark:invert-0"
                                    src="https://oxymor-ns.tailus.io/logos/linear.svg"
                                    alt="Linear logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Linear
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8"
                                    src="/logos/confluence.svg"
                                    alt="Confluence logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Confluence
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8 dark:invert"
                                    src="/logos/webhook.svg"
                                    alt="Webhooks logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Webhooks
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8"
                                    src="/logos/atlassiastatuspage.svg"
                                    alt="Statuspage logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Atlassian Statuspage
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8 dark:invert"
                                    src="/logos/vercel.svg"
                                    alt="Confluence logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Vercel
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8 dark:invert"
                                    src="/logos/mongodb.svg"
                                    alt="MongoDB logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                MongoDB
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    className="m-auto size-8"
                                    src="/logos/grafana.svg"
                                    alt="Grafana logo"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                Grafana
                            </span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <Plus className="w-6 h-6 text-neutral-600 dark:text-neutral-400 transition-transform " />
                            </div>
                            <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900">
                                More Coming Soon
                            </span>
                        </motion.div>
                    </div>
                    </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};