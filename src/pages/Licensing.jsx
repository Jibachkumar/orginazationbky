import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function Licensing() {
  const [openCategory, setOpenCategory] = useState("");

  const categories = [
    {
      name: "Construction and Land Development",
      permits: [
        {
          title: "Building and Land Use Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Land Conversion Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Morcellement Permit",
          subtitles: ["Permit requirements and forms"],
        },
      ],
    },
    {
      name: "Education",
      permits: [
        {
          title: "MQA - Authorisation of Change for Training Institution",
          subtitles: [
            "Legislation and useful information",
            "List of Registered Training Institution",
          ],
        },
        {
          title: "MQA - New Registration for Training Institution",
          subtitles: [
            "Legislation and useful information",
            "List of Registered Training Institution",
          ],
        },
        {
          title: "MQA - Renewal of Registration for Training Institution",
          subtitles: [
            "Legislation and useful information",
            "List of Registered Training Institution",
          ],
        },
      ],
    },
    {
      name: "Environment",
      permits: [
        {
          title: "Environment Impact Assessment (EIA) Licence",
          subtitles: [
            "Legislation and useful information",
            "EIA Report Decision on EIA Applications",
          ],
        },
        {
          title: "Preliminary Environment Report (PER) Approval",
          subtitles: [
            "Legislation and useful information",
            "PER Report Decision on PER Applications",
          ],
        },
      ],
    },
    {
      name: "Health",
      permits: [
        {
          title: "DCCB - License to trade In Dangerous Chemicals",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "DCCB - Registration of Extremely Dangerous Chemical",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Manufacturing",
      permits: [
        {
          title: "Excise License",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Safety",
      permits: [
        {
          title: "Fire Certificate",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Fire Safety Plan",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Schemes",
      permits: [
        {
          title: "Film Rebate Scheme - Mauritius",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Freight Rebate Scheme",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Support for Trade Promotion and Marketing Scheme",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Support for Trade Promotion and Marketing Scheme - Agro",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Tourism",
      permits: [
        {
          title: "Pleasure Craft Licence",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Work & Live",
      permits: [
        {
          title: "Dependent - Occupation Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Occupation/Residence Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Premium Visa",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Request for Skilled Workers from India",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Work Permit",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
  ];

  return (
    <div className=" pt-10">
      <div className="max-w-[68rem] mx-auto">
        {/* Title + Tabs */}
        <div className="flex items-center gap-68 mb-8">
          <h1 className="text-3xl">Permits</h1>

          <div className="flex border border-[#2f6fa3] rounded overflow-hidden">
            <button className="bg-[#2f6fa3] text-white px-6 py-2 text-sm">
              Category
            </button>
            <button className="bg-white text-[#2f6fa3] px-6 py-2 text-sm">
              Agency
            </button>
          </div>
        </div>

        {/* Category Section */}
        {categories.map((category) => {
          const isOpen = openCategory === category.name;

          return (
            <div key={category.name} className={isOpen ? "mb-6" : ""}>
              <div
                onClick={() => setOpenCategory(isOpen ? null : category.name)}
                className="flex items-center gap-2 cursor-pointer text-[#2f6fa3] font-semibold mb-4"
              >
                {isOpen ? (
                  <i className="fa-solid fa-caret-down text-xl text-black"></i>
                ) : (
                  <i className="fa-solid fa-caret-right text-xl text-black"></i>
                )}
                <span className="font-bold text-sm hover:underline">
                  {category.name}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 cursor-pointer text-[#2f6fa3] font-semibold ">
                  {isOpen && (
                    <div className="space-y-3 w-full border-b border-black pb-5">
                      {category.permits.map((permit) => (
                        <div
                          key={permit.title}
                          className="flex justify-between w-[27rem] items-start"
                        >
                          <div>
                            <p className="font-bold text-black font-[Open Sans] text-[12px]">
                              {permit.title}
                            </p>
                            {permit.subtitles?.map((sub, index) => (
                              <p key={index} className="text-xs text-[#2f6fa3]">
                                {sub}
                              </p>
                            ))}
                          </div>

                          <button className="border border-[#2f6fa3] text-[#2f6fa3] px-6 py-1 text-sm rounded hover:bg-[#2f6fa3] hover:text-white transition">
                            APPLY
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
