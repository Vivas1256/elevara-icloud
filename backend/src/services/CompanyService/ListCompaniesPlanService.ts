import Company from "../../models/Company";
import Plan from "../../models/Plan";

const ListCompaniesPlanService = async (): Promise<Company[]> => {
  const companies = await Company.findAll({
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
          "use InternalChat",
          "use ExternalApi",
          "use Kanban",
          "use OpenAi",
          "use Integrations",
		  "useInternal"
        ]
      },
    ]
  });
  return companies;
};

export default ListCompaniesPlanService;
