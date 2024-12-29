import Company from "../../models/Company";
import Plan from "../../models/Plan";

const ShowPlanCompanyService = async (id: string | number): Promise<Company> => {
    const companies = await Company.findOne({
        where: { id },
        attributes: ["id", "name", "email", "status", "dueDate", "createdAt", "phone"],
        order: [["name", "ASC"]],
        include: [
            {
                model: Plan, as: "plan",
                attributes: [
                    "id",
                    "name",
                    "users",
                    "connections",
                    "queues",
                    "value",
                    "use Campaigns",
                    "use Schedules",
                    "use Chat interno",
                    "use ExternalApi",
                    "use Kanban",
                    "use OpenAi",
                    "use Integrations",
					"use Internal"
                ]
            },
        ]
    });

    return companies;
};

export default ShowPlanCompanyService;
